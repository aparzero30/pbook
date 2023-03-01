import { Component, ElementRef, ViewChild } from '@angular/core';
import { contacts, Contacts } from '../../interfaces/Contact';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  contact!: Contacts;
  contacts = contacts;

  newName = '';
  newEmail = '';
  newNumber = '';
  selectedContact!: Contacts;

  ngOnChanges() {
    if (this.contact) {
      this.newName = this.contact.name;
      this.newEmail = this.contact.email;
      this.newNumber = this.contact.number;
    }
  }

  addContact() {
    let nonExist = true;

    for (const element of contacts) {
      console.log(element.name + ' ' + this.newName);

      if (
        element.email == this.newEmail ||
        element.name == this.newName ||
        element.number == this.newNumber
      ) {
        nonExist = false;
        break;
      }
    }

    if (
      this.newName != '' &&
      this.newEmail != '' &&
      this.newNumber &&
      nonExist
    ) {
      this.contacts.push({
        name: this.newName,
        email: this.newEmail,
        number: this.newNumber,
      });
      this.newName = '';
      this.newEmail = '';
      this.newNumber = '';
    } else {
      alert('error cant add input fields are missing or user already exists');
    }
  }
}
