import { useState } from 'react'

const TaskList = () => {
  const initialTasks = [
    { id: 1, title: 'Nauczyć się React basics', completed: true },
    { id: 2, title: 'Zaimplementować useState', completed: true },
    { id: 3, title: 'Pracować z useEffect', completed: false },
    { id: 4, title: 'Opanować renderowanie warunkowe', completed: true },
    { id: 5, title: 'Zbudować listę filtrowaną', completed: false },
    { id: 6, title: 'Pobrać dane z API', completed: false },
    { id: 7, title: 'Obsługiwać zdarzenia myszy', completed: true },
    { id: 8, title: 'Testować całą aplikację', completed: false },
  ]

  const [tasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    } else if (filter === 'incomplete') {
      return tasks.filter((task) => !task.completed)
    }
    return tasks
  }

  const filteredTasks = getFilteredTasks()

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="taskFilter">Filtruj zadania:</label>
        <select
          id="taskFilter"
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Wszystkie</option>
          <option value="completed">Ukończone</option>
          <option value="incomplete">Nieukończone</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className="task-item">
            <input type="checkbox" className="task-checkbox" checked={task.completed} readOnly />
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</span>
            <span className={`task-badge ${task.completed ? 'badge-completed' : 'badge-pending'}`}>
              {task.completed ? 'Ukończone' : 'W toku'}
            </span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'var(--space-16)', color: 'var(--color-text-secondary)' }}>
        Pokazano {filteredTasks.length} z {tasks.length} zadań
      </div>
    </div>
  )
}

export default TaskList
