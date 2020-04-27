import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "@env/environment";
import {Project, Task} from "@app/todo/todo.model";

export interface ErrorMetadata {
  contextAction: string;
  errorCode: string;
  blocker: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  async getProjects(userId: string): Promise<Project[]> {
    //
    // let params = new HttpParams();
    // params = params.set('userId', userId);

    // const projects: Project[] = [
    //   {
    //     name: 'project 1',
    //     tasks: [
    //       {
    //         description: 'description 1',
    //         creationDate: '2020-04-23T17:54:35',
    //         finishDate: '2020-04-25T18:00:00',
    //         completed: true
    //       },
    //       {
    //         description: 'description 2',
    //         creationDate: '2020-04-23T17:54:35',
    //         finishDate: '2020-04-25T18:00:00',
    //         completed: false
    //       },
    //       {
    //         description: 'description 3',
    //         creationDate: '2020-04-23T17:54:35',
    //         finishDate: '2020-04-30T18:00:00',
    //         completed: false
    //       },
    //     ]
    // }]
    // return Promise.resolve(projects);
    const projects = await this.http.get<Project[]>(environment.routes.getProjects(userId)).toPromise();
    const promise: any[] | PromiseLike<any[]> = [];

    for (const p of projects) {
      const mp = this.getTasks(p.id);
      promise.push(mp);
      p.tasks = await mp;
    }

    return Promise.resolve(promise && projects);
  }

  createProject(name: string, userId: string) {
    return this.http.post(environment.routes.createProject(), {
      name,
      userId
    }).toPromise();
  }

  createTask(name: string, projectId: string) {
    return this.http.post(environment.routes.createTask(),{name, projectId}).toPromise();
  }

  getTasks(projectId: string): Promise<Task[]> {
    return this.http.get<Task[]>(environment.routes.getTasks(projectId)).toPromise();
  }
}
