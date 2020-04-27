import { Component, OnInit } from '@angular/core';
import {TodoService} from "@app/todo/todo.service";
import {Project, Task} from "@app/todo/todo.model";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  isLoading = false;

  newProjectName: string;
  newTaskName: string;
  projects: Project[];

  projectsFormControl: FormControl[] = [];

  constructor(private todoService: TodoService, private lang: TranslateService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.isLoading = true;

    this.getProjects();
  }

  createProject() {
    this.todoService.createProject(this.newProjectName, '123').then((x) => {
      console.log('Project created!');

      this.getProjects();
    });
  }

  getProjects() {
    this.todoService.getProjects('123').then(projects => {
      this.projects = projects;

      this.projects.forEach(project => {
        if (project.tasks && project.tasks.length > 0) {
          project.tasks.forEach(task => {
            task.ui = {
              formControl: new FormControl(task.completed || false),
              translateTerminationDate: task.finishDate ? this.lang.instant(
                'todo.taskEndingDate',
                {date: this.datePipe.transform(new Date(task.finishDate), 'short')}
              ) : ''
            }
          })
        }
      })
    });
  }

  addTask(projectId: string) {
    this.todoService.createTask(this.newTaskName, projectId).then(() =>  {
      // todo: should update only the task added instead of getProjects.
      this.getProjects();
    });
  }

  editProjectName() {

  }

  deleteProject() {

  }

  deleteTask(task: Task) {

  }
}
