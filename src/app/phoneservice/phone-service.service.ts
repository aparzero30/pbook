import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Contacts, contacts } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root',
})
export class PhoneServiceService {
  constructor() {}

  public selectedContact = new BehaviorSubject<Contacts | null>(null);
  selectedContact$ = this.selectedContact.asObservable();

  updateContact(
    email: string,
    newName: string,
    newEmail: string,
    newNumber: string
  ): void {
    const index = contacts.findIndex((contact) => contact.email === email);
    if (index !== -1) {
      contacts[index].name = newName;
      contacts[index].email = newEmail;
      contacts[index].number = newNumber;
    } else {
      console.log(`Contact with email ${email} not found`);
    }
  }
}
