# Integrating Firebase with Angular Standalone Components

This README outlines how to integrate Firebase into an Angular application, focusing on the use of standalone components for a modern, modular architecture. It includes steps for setting up Firebase, configuring your Angular environment, and creating a standalone component to interact with Firestore.

## Prerequisites

- Node.js (LTS version recommended)
- Angular CLI: Install globally via `npm install -g @angular/cli`

## Setup Firebase and AngularFire in Your Angular Project

### Step 1: Install Dependencies

Add Firebase and AngularFire to your project:

```bash
ng add @angular/fire
```

> Nx: `npm install @angular/fire && npx nx g @angular/fire:ng-add`

### Step 2: Obtain Your Firebase Configuration

#### Create a Firebase Project

1. Visit the [Firebase Console](https://console.firebase.google.com/).
2. Click "Add project" and follow the on-screen instructions to create a new Firebase project.

#### Add a Web App to Your Project

1. In your Firebase project dashboard, click the web (`</>`) icon to add a web app.
2. Register your app by providing a nickname (Firebase Hosting is optional at this stage).
3. Copy the Firebase configuration object provided after registering your app.

#### Configure Your Angular Environment

Paste the Firebase configuration into your Angular project's environment files:

- For development, edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  }
};
```

- For production builds, update `src/environments/environment.prod.ts` with the same configuration but set `production: true`.

### Step 3: Initialize Firebase

Create an `app.config.ts` file to configure Firebase with Angular using the `ApplicationConfig`:

```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            provideFirestore(() => getFirestore())
        ),
    ],
};
```

### Step 4: Create a Standalone Component

Here's an example component that uses Firestore:

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'courses-index',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class CoursesIndexComponent implements OnInit {
    constructor(private firestore: Firestore) {}

    ngOnInit(): void {
        console.log(this.firestore);
    }
}
```

This component demonstrates basic Firebase integration within an Angular standalone component.

## Running Your Application

With Firebase configured and your standalone component set up, you can run your Angular application:

```bash
ng serve
```

Navigate to `http://localhost:4200/` to view your application in action.

---

This README now provides a complete guide for integrating Firebase with an Angular application, from setup and configuration to implementing a standalone component that interacts with Firestore.