import { TasksService } from 'src/app/tasks/services/tasks.service';
import { TaskData } from './../../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  public tasks: TaskData[];

  constructor(tasksService: TasksService) {
    this.tasks = tasksService.getTasks();
  }

  ngOnInit() {
  }

}
