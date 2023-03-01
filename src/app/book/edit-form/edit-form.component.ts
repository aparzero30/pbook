import { Component } from '@angular/core';
import { PhoneServiceService } from 'src/app/phoneservice/phone-service.service';
import { contacts, Contacts } from '../../interfaces/Contact';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent {
  newName = '';
  newEmail = '';
  newNumber = '';

  constructor(private contactService: PhoneServiceService) {
    this.contactService.selectedContact$.subscribe((contact) => {
      // Do something with the selected contact data
      console.log(contact);

      if (contact) {
        this.newName = contact.name;
        this.newEmail = contact.email;
        this.newNumber = contact.number;
      }
    });
  }

  onSubmit() {
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

    const selectedContact = this.contactService.selectedContact.getValue();

    if (
      selectedContact?.name != '' &&
      selectedContact?.email != '' &&
      selectedContact?.number != '' &&
      nonExist
    ) {
      if (selectedContact) {
        selectedContact.name = this.newName;
        selectedContact.email = this.newEmail;
        selectedContact.number = this.newNumber;
        this.contactService['updateContact'](
          selectedContact.email,
          selectedContact.name,
          selectedContact.email,
          selectedContact.number
        );
      }
    } else {
      alert('error updating');
    }
  }

  ngOnInit(): void {
    console.log('hello');
  }
}
