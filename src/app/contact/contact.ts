import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  canSubmit = false;

  onFormInput(event: Event): void {
    const form = event.currentTarget as HTMLFormElement;
    this.canSubmit = form.checkValidity();
  }
}
