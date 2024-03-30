import { Injectable } from '@angular/core';
import {
    Firestore,
    collection,
    doc,
    addDoc,
    setDoc,
    deleteDoc,
    DocumentData,
    docData,
    DocumentReference,
    collectionData,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private db: Firestore) {}

    public getAll(collectionName: string): Observable<any[]> {
        const collectionRef = collection(this.db, collectionName);
        return collectionData(collectionRef, { idField: 'id' });
    }

    public getItem(
        collectionName: string,
        id: string
    ): Observable<DocumentData | { id: any } | undefined> {
        const docRef = doc(this.db, collectionName, id);
        return docData(docRef, { idField: 'id' });
    }

    public create(
        collectionName: string,
        newResource: DocumentData
    ): Observable<DocumentReference<DocumentData>> {
        const collectionRef = collection(this.db, collectionName);
        return from(addDoc(collectionRef, newResource));
    }

    public update(
        collectionName: string,
        id: string,
        resource: DocumentData
    ): Observable<void> {
        const docRef = doc(this.db, collectionName, id);
        return from(setDoc(docRef, resource));
    }

    public delete(collectionName: string, id: string): Observable<void> {
        const docRef = doc(this.db, collectionName, id);
        return from(deleteDoc(docRef));
    }
}
