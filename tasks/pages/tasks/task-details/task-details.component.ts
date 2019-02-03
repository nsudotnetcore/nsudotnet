import { TaskData } from './../../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks/services/tasks.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  public taskNumber: number;
  public curTask$: Observable<TaskData>;
  constructor(private route: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit() {
    const that = this;
    this.curTask$ = this.route.paramMap.pipe(map((params: ParamMap) => {
        const id        = +params.get('id');
        that.taskNumber = id + 1;
        return this.tasksService.getTask(id);
      }));
  }
}
