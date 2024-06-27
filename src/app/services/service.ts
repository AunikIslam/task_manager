import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class BaseService {
  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) {}

  addUser(): void {
    this.fireDatabase.list('users').push({
      name: 'Test',
      email: '@gmail',
      password: 'asdfghjkl',
    });
  }

  fetchData(pNode: string, pSearchValue: any, pSearchField: string): Observable<any[]> {
    return this.fireDatabase.list(pNode, ref => ref.orderByChild(pSearchField).equalTo(pSearchValue)).valueChanges();
  }

  checkForExistingValue(): void {

  }

  login(): void {

  }
}
