import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-wish-list',
  templateUrl: './editWishList.component.html',
  styleUrls: ['./editWishList.component.css']
})
export class EditWishListComponent {
  wishList = ['band']

  addBand() {
    this.wishList.push('band');
  }

  removeBand(item) {
    var index = this.wishList.indexOf(item);
    if (index > -1) {
      this.wishList.splice(index, 1);
    }
  }
}
