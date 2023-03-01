import { Component } from '@angular/core';

import { PhoneServiceService } from 'src/app/phoneservice/phone-service.service';
import { contacts, Contacts } from '../../interfaces/Contact';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss'],
})
export class PhoneBookComponent {
  contacts = contacts;

  deleteContact(contact: { name: string; email: string; number: string }) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
    console.log(contacts);
  }

  constructor(private phoneService: PhoneServiceService) {}

  editContact(contact: Contacts) {
    this.phoneService.selectedContact.next(contact);

    const update = document.getElementById('frm1');
    const add = document.getElementById('frm');

    if (update) {
      update.style.display = 'flex';
    }

    if (add) {
      add.style.display = 'none';
    }
  }
}
