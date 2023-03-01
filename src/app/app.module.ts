import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneBookComponent } from './book/phone-book/phone-book.component';
import { AddFormComponent } from './book/add-form/add-form.component';
import { EditFormComponent } from './book/edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { PhoneServiceService } from './phoneservice/phone-service.service';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: 'edit', component: EditFormComponent },
  { path: 'add', component: AddFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AddFormComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [PhoneServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
