import { TaskData } from './tasks/services/tasks.service';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dot-net-course-tasks';
  public tasks: TaskData[];
  constructor(tasksService: TasksService) {
    this.tasks     = tasksService.getTasks();
  }
}
