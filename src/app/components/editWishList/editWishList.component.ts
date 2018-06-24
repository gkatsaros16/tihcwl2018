import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-wish-list',
  templateUrl: './editWishList.component.html',
  styleUrls: ['./editWishList.component.css']
})
export class EditWishListComponent {
  wlRef;
  model = {};

  constructor(db: AngularFireDatabase) {
    //get specifc wl by username
    this.wlRef = db.object('/wl').valueChanges();
  }

  wishList = ['']

  addBand() {
    this.wishList.push('');
  }

  save(wishList: NgForm) {
    //use username as key
    this.wlRef.update({ 'george':  wishList.value });
  }

  removeBand(item) {
    var index = this.wishList.indexOf(item);
    if (index > -1) {
      this.wishList.splice(index, 1);
    }
  }
}
