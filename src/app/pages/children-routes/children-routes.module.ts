import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    FatherComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChildrenRoutesModule { }
