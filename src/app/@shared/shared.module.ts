import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {LoaderComponent} from './loader/loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent],
  providers: [DatePipe],
  exports: [LoaderComponent],
})
export class SharedModule {}
