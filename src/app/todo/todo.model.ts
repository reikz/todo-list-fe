import {FormControl} from "@angular/forms";

export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task extends TaskUI {
  id: string;
  name: string;
  creationDate: string;
  finishDate: string;
  completed: boolean
}

export interface TaskUI {
  ui?: {
    formControl?: FormControl;
    translateTerminationDate?: string;
  }
}
