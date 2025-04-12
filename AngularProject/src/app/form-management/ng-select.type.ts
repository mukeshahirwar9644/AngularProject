import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-ng-select',
  template: `
    <ng-select
      [items]="to.options | formlySelectOptions : field | async"
      [placeholder]="to.label"
      [bindValue]="to.bindValue || 'value'"
      [formControl]="formControl"
      [class.is-invalid]="showError">
    </ng-select>
  `
})
export class NgSelectFormlyComponent extends FieldType<FieldTypeConfig> {}
