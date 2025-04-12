import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormContainerComponent } from './form-container/form-container.component';
import { MaterialModule } from '../material/material.module';
import { ObjectTypeComponent } from './object.type';
import { ArrayTypeComponent } from './array.type';
import { FormlyFieldPhoneNumber } from './custom-fields/phone-number.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormlyFieldCountryCode } from './custom-fields/country-code.component';
import { FormlyFieldAlternatePhoneNumber } from './custom-fields/alternate-phone-number.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectFormlyComponent } from './ng-select.type';
import { FormlySelectModule } from '@ngx-formly/core/select';

export function minItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.props.minItems} items`;
}

export function maxItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.props.maxItems} items`;
}

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.props.minLength} characters`;
}

export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.props.maxLength} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be >= ${field.props.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be <= ${field.props.max}`;
}

export function multipleOfValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be multiple of ${field.props.step}`;
}

export function exclusiveMinimumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be > ${field.props.step}`;
}

export function exclusiveMaximumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be < ${field.props.step}`;
}

export function constValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.props.const}"`;
}

export function typeValidationMessage({ schemaType }: any) {
  return `should be "${schemaType[0]}".`;
}

@NgModule({
  declarations: [
    FormContainerComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    FormlyFieldPhoneNumber,
    FormlyFieldCountryCode,
    FormlyFieldAlternatePhoneNumber,
    NgSelectFormlyComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'type', message: typeValidationMessage },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage },
        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
        { name: 'const', message: constValidationMessage }
      ],
      types: [
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'ng-select-autocomplete', component: NgSelectFormlyComponent },
        {
          name: 'phoneNumber',
          component: FormlyFieldPhoneNumber,
          wrappers: ['form-field'],
          defaultOptions: {
            fieldGroup: [
              { type: 'input', key: 'countryCode' },
              { type: 'input', key: 'phoneNumber' }
            ]
          }
        }
        // {
        //   name: 'countryCode',
        //   component: FormlyFieldCountryCode,
        //   wrappers: ['form-field']
        // },
        // {
        //   name: 'phoneNumber',
        //   component: FormlyFieldAlternatePhoneNumber,
        //   wrappers: ['form-field']
        // },
        // {
        //   name: 'phoneNumber',
        //   extends: 'formly-group',
        //   wrappers: ['form-field'],
        //   defaultOptions: {
        //     fieldGroupClassName: 'display-flex',
        //     fieldGroup: [
        //       {
        //         type: 'select',
        //         key: 'countryCode',
        //         className: 'flex-2',
        //         templateOptions: {
        //           required: true,
        //           options: [
        //             { label: 'India +91', value: '+91' },
        //             { label: 'Hong Kong +852', value: '+852' },
        //             { label: 'USA +1', value: '+1' }
        //           ]
        //         },
        //         validation: {
        //           messages: {
        //             required: 'required'
        //           }
        //         }
        //       },
        //       {
        //         type: 'input',
        //         key: 'phoneNumber',
        //         className: 'flex-2',
        //         templateOptions: { required: true }
        //       }
        //     ]
        //   }
        // }
      ]
    }),
    FormlyMaterialModule,
    MaterialModule
  ],
  exports: [FormContainerComponent]
})
export class FormManagementModule {}
