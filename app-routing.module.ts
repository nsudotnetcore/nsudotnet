import { TasksListComponent } from './tasks/pages/tasks/tasks-list/tasks-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './tasks/pages/main/main.component';
import { TaskDetailsComponent } from './tasks/pages/tasks/task-details/task-details.component';
import { GithubManualComponent } from './tasks/pages/info/github-manual/github-manual.component';
import { TaskBackpackComponent } from './tasks/pages/tasks/task-backpack/task-backpack.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'task/5',      redirectTo: 'task-backpack'},
  { path: 'task/:id',      component: TaskDetailsComponent },
  {
    path: 'tasks',
    component: TasksListComponent,
    // data: { title: 'Tasks KList' }
  },
  {
    path: 'task-backpack',
    component: TaskBackpackComponent,
    // data: { title: 'Tasks KList' }
  },
  //
  {
    path: 'github-manual',
    component: GithubManualComponent,
    // data: { title: 'GitHub Manual' }
  },
  //
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
