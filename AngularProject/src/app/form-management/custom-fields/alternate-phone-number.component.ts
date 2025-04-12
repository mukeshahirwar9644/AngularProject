import { Component, OnInit } from '@angular/core';
import { FieldTypeConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'formly-field-custom-input',
  template: ` <!-- <input matInput [formControl]="formControl.get('phoneNumber')" type="text" [mask]="phoneNumberMask" /> --> `
})
export class FormlyFieldAlternatePhoneNumber extends FieldType<FieldTypeConfig> implements OnInit {
  phoneNumberMask: string = '00000-00000';
  ngOnInit(): void {
    this.formControl.valueChanges.subscribe(newValue => {
      if (newValue.countryCode == '+852') {
        this.phoneNumberMask = '0000-0000';
      } else if (newValue.countryCode == '+1') {
        this.phoneNumberMask = '000-0000';
      } else {
        this.phoneNumberMask = '00000-00000';
      }
    });
  }
}
