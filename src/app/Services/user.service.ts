import { Injectable } from '@angular/core';
import {addDoc, Firestore, collection, collectionData} from '@angular/fire/firestore'
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: Firestore) { }

  addUser(user:User){
    const myCollection=collection(this.fs,'users');
    addDoc(myCollection,user);
  }
  
}
