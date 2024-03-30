import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import Firebase libraries
import { initializeApp } from 'firebase/app';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment.development';

if (environment.production) {
    enableProdMode();
}

// Initialize Firebase
// const firebaseApp = initializeApp(environment.firebaseConfig);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
