import { Component, OnInit } from '@angular/core';
import { FieldTypeConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/material';

@Component({
  selector: 'formly-field-custom-input',
  template: `
    <!-- <mat-select [formControl]="formControl.get('countryCode')">
      <mat-option value="+91">India +91</mat-option>
      <mat-option value="+852">Hong Kong +852</mat-option>
      <mat-option value="+1">USA +1</mat-option>
    </mat-select> -->
  `
})
export class FormlyFieldCountryCode extends FieldType<FieldTypeConfig> implements OnInit {
  ngOnInit(): void {}
}
