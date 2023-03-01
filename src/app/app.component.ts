import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { zip } from 'rxjs';
import { Contacts } from './interfaces/Contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PhoneBook';

  selectedContact!: Contacts;
  
  onSelectedContact(contact: Contacts) {
    this.selectedContact = contact;
  }
  
  constructor(private renderer: Renderer2) {}

  updateColors(): void {

    const existingStyle = document.querySelector('style[data-colors]');
    if (existingStyle) {
      document.head.removeChild(existingStyle);
    }
  


    const style = this.renderer.createElement('style');
    const css = `
      :root {
        --primary-color: #36393f;
        --secondary-color: #60FEE7;
        --font-color: #60FEE7;
        --icon-color:  #60FEE7;
      }
    `;
    const text = this.renderer.createText(css);
    this.renderer.appendChild(style, text);
    this.renderer.appendChild(document.head, style);

    const add = document.getElementById('add');
    const cl1 = document.getElementById('color1');
    const btn = document.getElementById('btn');
    const btn1 = document.getElementById('btn1');
   
    if (add && cl1 && btn && btn1) {
      add.style.color='#36393f';
      add.style.boxShadow='none';
      cl1.style.backgroundColor='cadetblue';
      btn.style.color='#36393f';
      btn1.style.color='#36393f';
    }

  }

  updateColors1(): void {

    const existingStyle = document.querySelector('style[data-colors]');
    if (existingStyle) {
      document.head.removeChild(existingStyle);
    }
  


    const style = this.renderer.createElement('style');
    const css = `
      :root {
        --primary-color: cadetblue;
        --secondary-color: white;
        --font-color: black;
        --icon-color: indianred;
      }
  
    `;
    const text = this.renderer.createText(css);
    this.renderer.appendChild(style, text);
    this.renderer.appendChild(document.head, style);


    const add = document.getElementById('add');
    const btn = document.getElementById('btn');
    const btn1 = document.getElementById('btn1');
   

   
    if (add  && btn && btn1) {
    
      add.style.color='white';
      btn.style.color='white';
      btn1.style.color='white';
    }
     
    }



    updateColors2(): void {

      const existingStyle = document.querySelector('style[data-colors]');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    
  
  
      const style = this.renderer.createElement('style');
      const css = `
        :root {
          --primary-color: rgb(63, 91, 160);
          --secondary-color: white;
          --font-color: white;
          --icon-color:  white;
        }
      `;
      const text = this.renderer.createText(css);
      this.renderer.appendChild(style, text);
      this.renderer.appendChild(document.head, style);
  
      const add = document.getElementById('add');
      const cl1 = document.getElementById('color1');
      const btn = document.getElementById('btn');
      const btn1 = document.getElementById('btn1');
     
      if (add && cl1 && btn && btn1) {
        add.style.color='#36393f';
        add.style.boxShadow='none';
        cl1.style.backgroundColor='cadetblue';
        btn.style.color='#36393f';
        btn1.style.color='#36393f';
      }
  
    }



  }




