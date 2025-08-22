
function filterPendingTasks(tasks) {
  return tasks.filter(t=> !t.completed)
  // return tasks.filter(t=> !t.completed).map(t => t.task).join(', ')
}

const tasks = [
  { task: "Wash the dishes", completed: true },
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false },
  { task: "Clean the house", completed: true },
];

const result = filterPendingTasks(tasks);
console.log(result);
/**
 * // Pending tasks
  { task: "Exercise", completed: false },
  { task: "Study programming", completed: false }
 */
