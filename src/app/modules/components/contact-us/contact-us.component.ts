import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private StoreService: StoreServiceService) { }
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      full_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone_number: new FormControl(null, [Validators.required , Validators.maxLength(10), Validators.minLength(10)]),
      subject: new FormControl(null, [Validators.required , Validators.maxLength(50)]),
      message: new FormControl(null, [Validators.required , Validators.maxLength(250)])
    })
  }

  sendMessage() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      const { full_name, email, phone_number, subject, message } = this.contactForm.value;
      this.StoreService.addContactDetails({
        full_name,
        email,
        phone_number,
        subject,
        message
      })
    }
    this.contactForm.reset();
  }

}
