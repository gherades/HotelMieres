import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FaresComponent } from './fares.component';

@NgModule({
  declarations: [FaresComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: FaresComponent}
    ]),
    FormsModule
  ],
})
export class FaresModule { }
