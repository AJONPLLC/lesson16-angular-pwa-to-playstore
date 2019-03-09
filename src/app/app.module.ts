import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatSliderModule, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, // This is a weird but for hammerjs I think
    SidenavModule,
    AngularFireModule.initializeApp(environment.firebase), // This sets our key to initialize firebase
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }], // https://github.com/angular/angularfire2/issues/1993
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer
      .getContainerElement()
      .classList.add('angular-material-router-app-theme');
  }
}
