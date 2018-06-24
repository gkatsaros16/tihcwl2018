import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { TopFourComponent } from './components/topFour/topFour.component';
import { MainWishListComponent } from './components/mainWishList/mainWishList.component';
import { HomeComponent } from './components/home/home.component';
import { EditWishListComponent } from './components/editWishList/editWishList.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EditSettingsComponent } from './components/editSettings/editSettings.component';
import { ProfileCardComponent } from './components/profileCard/profileCard.component';
import { WishListWallComponent } from './components/wishListWall/wishListWall.component';
import { AngularFireDatabase } from 'angularfire2/database';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editWishList', component: EditWishListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'wishListWall', component: WishListWallComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    CardComponent,
    TopFourComponent,
    MainWishListComponent,
    HomeComponent,
    EditWishListComponent,
    SettingsComponent,
    EditSettingsComponent,
    ProfileCardComponent,
    WishListWallComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'TIHCWL'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
