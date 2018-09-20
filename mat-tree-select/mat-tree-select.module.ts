import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatSelectModule,
} from '@angular/material';

import { MatTreeSelectComponent } from './mat-tree-select.component';

@NgModule({
  imports: [
    CommonModule,

    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [MatTreeSelectComponent],
  exports: [MatTreeSelectComponent]
})
export class MatTreeSelectModule { }
