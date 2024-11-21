import { useState } from "react";

export default function TaskForm() {
  // set style colours
  const [black, grey] = [{color: 'black'}, {color: 'grey'}];
  // use state to manage select field styling
  const [myStyle, setMyStyle] = useState(grey);

  return (
    <form action="#" className="taskform">
      <fieldset>
        <label htmlFor="task">Task</label>
        <input type="text" name="task" id="task" placeholder="task" required />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" placeholder="description"></textarea>
      </fieldset>
      <fieldset>
      <label htmlFor="dueDate">Due Date</label>
      <input type="date" name="dueDate" id="dueDate" required />
      </fieldset>
      <fieldset>
        <label htmlFor="assignedTo">Assigned To</label>
        <input type="text" name="assignedTo" id="assignedTo" placeholder="name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="status">Status</label>
        <select name="status" id="status" style={myStyle} onChange={() => setMyStyle(black)} required>
          <option style={grey} value="" selected disabled>select</option>
          <option style={black} value="in-progress">in-progress</option>
          <option style={black} value="completed">completed</option>
          <option style={black} value="review">review</option>
        </select>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
}