import { useState } from 'react'
import ToggleDetails from './components/ToggleDetails'
import ScoreDisplay from './components/ScoreDisplay'
import TaskList from './components/TaskList'
import UserList from './components/UserList'
import TimerCounter from './components/TimerCounter'
import FunctionalComponents from './components/FunctionalComponents'

const App = () => {
  const [activeExercise, setActiveExercise] = useState('exercise1')

  const exercises = [
    { id: 'exercise1', name: 'Ćwiczenie 1', title: 'Toggle Details', component: ToggleDetails },
    { id: 'exercise2', name: 'Ćwiczenie 2', title: 'Score Display', component: ScoreDisplay },
    { id: 'exercise3', name: 'Ćwiczenie 3', title: 'Task List', component: TaskList },
    { id: 'exercise4', name: 'Ćwiczenie 4', title: 'User List', component: UserList },
    { id: 'exercise5', name: 'Ćwiczenie 5', title: 'Timer Counter', component: TimerCounter },
    { id: 'task3', name: 'Zadanie 3', title: 'Komponenty Funkcyjne', component: FunctionalComponents },
  ]

  const currentExercise = exercises.find((ex) => ex.id === activeExercise) || exercises[0]
  const CurrentComponent = currentExercise.component

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Ćwiczenia &amp; Zadania</h1>
        <p>Interaktywne ćwiczenia z React Hooks i obsługą zdarzeń</p>
      </header>

      <nav className="nav-container">
        {exercises.map((exercise) => (
          <button
            key={exercise.id}
            className={`nav-button ${activeExercise === exercise.id ? 'active' : ''}`}
            onClick={() => setActiveExercise(exercise.id)}
          >
            <div>{exercise.name}</div>
            <div style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-4)', opacity: 0.8 }}>
              {exercise.title}
            </div>
          </button>
        ))}
      </nav>

      <main className="content-section">
        <h2 className="section-title">
          {currentExercise.name}: {currentExercise.title}
        </h2>
        <div className="section-description">
          {currentExercise.id === 'exercise1' && 'Przycisk toggle dla pokazywania i ukrywania szczegółów'}
          {currentExercise.id === 'exercise2' && 'Wyświetlanie wyniku na podstawie wartości ze slidera'}
          {currentExercise.id === 'exercise3' && 'Filtrowanie listy zadań według statusu ukończenia'}
          {currentExercise.id === 'exercise4' && 'Pobieranie danych użytkowników z zewnętrznego API'}
          {currentExercise.id === 'exercise5' && 'Automatyczny licznik z efektami ubocznymi i resetowaniem'}
          {currentExercise.id === 'task3' && 'Zestaw komponentów z różnymi funkcjami obsługi zdarzeń'}
        </div>
        <CurrentComponent />
      </main>
    </div>
  )
}

export default App
