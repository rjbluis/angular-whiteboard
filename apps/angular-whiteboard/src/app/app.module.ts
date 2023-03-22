import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from "primeng/button";
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskFormComponent],
  imports: [BrowserModule, ButtonModule, DialogModule, HttpClientModule, TableModule],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
