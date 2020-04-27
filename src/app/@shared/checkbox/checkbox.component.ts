import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {createUniqueIdentifier} from "@shared/helper.functions";


@Component({
  selector: 'todo-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() tagline: string;
  @Input() control = new FormControl(false);
  @Input() strongLabel = false;
  @Input() value = false;
  @Input() tooltipMsg: string;

  stamp = createUniqueIdentifier();
}
