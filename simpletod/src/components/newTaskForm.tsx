import React, { FunctionComponent } from "react";
import { Task } from "../models/tasks";

// TODO: annotate event types properly
interface Props {
    onChange: (event: any) => void;
    onAdd: (event: any) => void;
    task: Task;
  }

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd} className="center">
    <input type='text' onChange={onChange} value={task.name} /><br/><br/>
    <button id='submit-button' type="submit">Add a task</button>
  </form>
);