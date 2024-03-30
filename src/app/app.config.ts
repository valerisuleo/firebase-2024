import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment.development';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(
            provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            provideFirestore(() => getFirestore())
        ),
    ],
};
