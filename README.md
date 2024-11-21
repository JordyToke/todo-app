# Simple Instructions for the To-Do App Assessment

### Create a Form to Add Task

#### Include input fields for:
<ul>
  <li>
    <input type="checkbox" checked />
    <span class="field checkmark">Name (text input)</span>
  <li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Description (text area)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Due Date (date picker)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Assigned To (text input)</span>
  </li>
  <li>
    <input type="checkbox" />
    <span class="field checkmark">Status (dropdown with options: in-progress, completed, review)</span>
  </li>
</ul>
<li>
Validate Form Inputs:
  <li>
<input type="checkbox" />
<span class="field checkmark">
Check that all fields are filled in before submission.
  <li>
<input type="checkbox" />
<span class="field checkmark">
Show an error message if any field is empty or invalid (e.g., "Name cannot be empty").
<li>
Assign a Unique ID to Each Task:
  <li>
<input type="checkbox" />
<span class="field checkmark">
When a new task is added, generate a unique ID for it (e.g., using Date.now() or an incrementing number).
  </ul>

### Save Tasks

<ul>
<li>
<input type="checkbox" />
<span class="field checkmark">
Store tasks as objects (e.g., { id, name, description, dueDate, assignedTo, status }) in an array.
<li>
<input type="checkbox" />
<span class="field checkmark">
Save this array in localStorage to keep tasks even when the page is refreshed.
</ul>

### Display Tasks on the Page

<ul>
<li>
<input type="checkbox" />
<span class="field checkmark">
Loop through the saved tasks and show each task on the page.
<li>
<input type="checkbox" />
<span class="field checkmark">
Display these details: Name, Description, Due Date, Assigned To, Status.
</ul>

### Edit and Remove Tasks

<ul>
<li>
<input type="checkbox" />
<span class="field checkmark">
Add buttons for Edit and Delete next to each task.
<li>
<input type="checkbox" />
<span class="field checkmark">
Edit: Allow the user to change task details in the form.
<li>
<input type="checkbox" />
<span class="field checkmark">
Delete: Remove the task from the array and update the display.
<li>
<input type="checkbox" />
<span class="field checkmark">
Sort Tasks by Status:
<li>
<input type="checkbox" />
<span class="field checkmark">
Add a button or dropdown to sort tasks by their status (in-progress, completed, review).
<li>
<input type="checkbox" />
<span class="field checkmark">
Rearrange the displayed tasks accordingly.
</ul>

[To Top ⬆️](#simple-instructions-for-the-to-do-app-assessment-top)

<style>
  .field {
    background-color: #555;
  }

  input:checked ~ .checkmark {
    background-color: green;
  }
  
  ul {
    list-style: none;
  }
</style>
