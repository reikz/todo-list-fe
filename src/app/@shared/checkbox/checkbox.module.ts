import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
