import { GithubManualComponent } from './tasks/pages/info/github-manual/github-manual.component';
import { TaskDetailsComponent } from './tasks/pages/tasks/task-details/task-details.component';
import { TasksListComponent } from './tasks/pages/tasks/tasks-list/tasks-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Router, Routes } from '@angular/router';
import { MainComponent } from './tasks/pages/main/main.component';
import { TaskBackpackComponent } from './tasks/pages/tasks/task-backpack/task-backpack.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TasksListComponent,
    TaskDetailsComponent,
    GithubManualComponent,
    TaskBackpackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
