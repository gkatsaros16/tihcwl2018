import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';


@Component({
  selector: 'app-edit-wish-list',
  templateUrl: './editWishList.component.html',
  styleUrls: ['./editWishList.component.css']
})
export class EditWishListComponent {
  wlRef;
  model = {};
  userId;
  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    //get specifc wl by username
    this.userId = this.afAuth.auth.currentUser.uid
    this.wlRef = db.object('/wl/' + this.userId);
  }

  wishList = ['']

  addBand() {
    this.wishList.push('');
    console.log()
  }

  save(wishList: NgForm) {
    this.wlRef.update({ [this.userId]: wishList.value });
  }

  removeBand(item) {
    var index = this.wishList.indexOf(item);
    if (index > -1) {
      this.wishList.splice(index, 1);
    }
  }
}
