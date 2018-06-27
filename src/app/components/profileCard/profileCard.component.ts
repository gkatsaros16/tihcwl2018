import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profileCard.component.html',
  styleUrls: ['./profileCard.component.css']
})
export class ProfileCardComponent {
  currentUser;
  constructor(public afAuth: AngularFireAuth) {
    // this.currentUser = this.afAuth.auth.currentUser.displayName;
  }

  check() {
    this.currentUser = this.afAuth.auth.currentUser.displayName;
  }
}
