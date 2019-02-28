import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterDetailsComponent } from './presenter-details/presenter-details.component';
import { AddPresenterComponent } from './add-presenter/add-presenter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PresenterDetailsComponent, AddPresenterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PresenterModule { }
