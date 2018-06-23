import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-edit-wish-list',
  templateUrl: './editWishList.component.html',
  styleUrls: ['./editWishList.component.css']
})
export class EditWishListComponent {
  itemsRef;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('wl');
  }
  wishList = ['chucky']

  addBand() {
    this.wishList.push('');
  }
  save() {
    this.itemsRef.push(this.wishList)
  }

  removeBand(item) {
    var index = this.wishList.indexOf(item);
    if (index > -1) {
      this.wishList.splice(index, 1);
    }
  }
}
