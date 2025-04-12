import { Component, OnInit } from '@angular/core';
import { FieldTypeConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <mat-select [formControl]="formControl.get('countryCode')">
      <mat-option value="+91">India +91</mat-option>
      <mat-option value="+852">Hong Kong +852</mat-option>
      <mat-option value="+1">USA +1</mat-option>
    </mat-select>
    <input matInput [formControl]="formControl.get('phoneNumber')" type="text" [mask]="phoneNumberMask" />
  `
})
export class FormlyFieldPhoneNumber extends FieldType<any> implements OnInit {
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
