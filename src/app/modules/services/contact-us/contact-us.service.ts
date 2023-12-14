import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiConstants } from 'src/app/core/constants/api-constants';
import { BaseResponseModel } from '../../models/base_response_model';
import { ContactUsModel } from '../../models/contact-us/contact-us.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient: HttpClient) { }

  addContactUsData(contact: ContactUsModel) {
    return this.httpClient.post<BaseResponseModel>(ApiConstants.ADD_CONTACT_US_DETAILS, {
      full_name: contact?.full_name,
      email: contact?.email,
      phone_number: contact?.phone_number,
      subject: contact?.subject,
      message: contact?.message
    }).pipe(
      map((data)=>  data?.responseData?.data as ContactUsModel)
    )
  }
}
