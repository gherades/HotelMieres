import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ServicesComponent}
    ]),
    FormsModule
  ],
})
export class ServicesModule { }
