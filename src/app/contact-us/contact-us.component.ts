import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  {
  constructor() {}

  ngOnInit(): void {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(30)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    contact: new FormControl('', {
      validators: [
        Validators.maxLength(30),
      ],
    }),
    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.maxLength(350),
        Validators.minLength(5),
      ],
    }),
  });

  async onSubmit() {
    let obj = this.contactForm.value;
    obj.contact = obj.contact.toString(),
    console.log('req is', obj);

   
  }

  resetContactUs() {
    // this.toastService.showSuccess("Message Sent! ");
    // this.contactForm.reset();
  }
}
