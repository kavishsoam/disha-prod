import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contacts } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(
    private apiService : ContactService
  ) { }
  contacts : any;

  ngOnInit(): void {
    this.apiService.getContacts().subscribe(res=>{
      console.log(res);
      this.contacts = res['contactsList'];
    },err=>{
      console.log(err);
    });
  }

}
