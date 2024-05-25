import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItemModule } from './main/task-item/task-item.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  bootstrap: [],
})
export class SharedModule {}
