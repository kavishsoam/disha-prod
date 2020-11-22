import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../components/models/contact';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ContactService {

    contactList : any;
    url = `https://www.mocky.io/v2/5c5d880f3200000e11220880`

    constructor(
        private http : HttpClient
    ) {
        this.getContacts();
    }

    getContacts() : Observable<Contacts> {
        this.http.get(this.url).subscribe(res=>{
            console.log(res);
            this.contactList = res;
        },err=>{
            console.log(err);
        })
      return of(this.contactList);
  
    }


    
}