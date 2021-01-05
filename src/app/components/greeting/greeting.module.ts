import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingRoutingModule } from './greeting-routing.module';
import { GreetingComponent } from './greeting.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GreetingComponent],
  imports: [
    CommonModule,
    GreetingRoutingModule,
    FormsModule
  ],
  exports: [
    GreetingComponent
  ]
})
export class GreetingModule { }
