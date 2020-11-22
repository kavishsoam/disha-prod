import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contacts } from '../models/contact';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

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
