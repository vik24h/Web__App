import { Injectable } from '@angular/core';
import {addDoc, Firestore, collection, collectionData} from '@angular/fire/firestore'
import { Question } from '../Models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private fs: Firestore) { }

  getQuestions():Observable<Question[]>{
    const myCollection:any =collection(this.fs,'questions');
    return collectionData(myCollection);
  }
}
