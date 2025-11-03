const { useState, useEffect } = React;

// Exercise 1: Toggle Details Component
const ToggleDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button 
        className="btn btn-primary"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>
      
      {showDetails ? (
        <div className="details-box">
          <h3>Szczegóły</h3>
          <p>
            To jest przykład komponentu toggle używającego React hooks.
            Stan komponentu jest zarządzany przez useState hook, który
            pozwala na dynamiczne pokazywanie i ukrywanie zawartości.
          </p>
          <ul>
            <li>Użyto useState do zarządzania stanem</li>
            <li>Przycisk zmienia tekst dynamicznie</li>
            <li>Renderowanie warunkowe za pomocą operatora warunkowego</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

// Exercise 2: Score Display Component
const ScoreDisplay = () => {
  const [score, setScore] = useState(50);

  let scoreMessage;
  if (score < 50) {
    scoreMessage = (
      <div className="score-message score-low">
        Za mało punktów
      </div>
    );
  } else if (score >= 50 && score <= 80) {
    scoreMessage = (
      <div className="score-message score-medium">
        W sam raz
      </div>
    );
  } else {
    scoreMessage = (
      <div className="score-message score-high">
        Super wynik!
      </div>
    );
  }

  return (
    <div className="score-container">
      <div className="score-slider">
        <label htmlFor="scoreSlider">Wybierz wynik (0-100):</label>
        <input
          id="scoreSlider"
          type="range"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />
      </div>
      
      <div className="score-value">{score} punktów</div>
      
      {scoreMessage}
    </div>
  );
};

// Exercise 3: Task List Component
const TaskList = () => {
  const initialTasks = [
    { id: 1, title: "Nauczyć się React basics", completed: true },
    { id: 2, title: "Zaimplementować useState", completed: true },
    { id: 3, title: "Pracować z useEffect", completed: false },
    { id: 4, title: "Opanować renderowanie warunkowe", completed: true },
    { id: 5, title: "Zbudować listę filtrowaną", completed: false },
    { id: 6, title: "Pobrać dane z API", completed: false },
    { id: 7, title: "Obsługiwać zdarzenia myszy", completed: true },
    { id: 8, title: "Testować całą aplikację", completed: false }
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

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
        {filteredTasks.map(task => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.completed}
              readOnly
            />
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </span>
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
  );
};

// Exercise 4: User List Component
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Ładowanie użytkowników...</div>;
  }

  return (
    <div>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <div className="user-name">{user.name}</div>
            <div className="user-email">📧 {user.email}</div>
            <div className="user-company">🏢 {user.company.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exercise 5: Timer Counter Component
const TimerCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 10) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [counter]);

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{counter}</div>
      <div className="timer-status">
        {counter < 10 ? 'Licznik działa...' : 'Licznik zatrzymany na 10!'}
      </div>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset licznika
      </button>
    </div>
  );
};

// Task 3: Functional Components
const FunctionalComponents = () => {
  // handleClick
  const [clickCount, setClickCount] = useState(0);

  // handleMouseOver
  const [isHovered, setIsHovered] = useState(false);
  const [hoverMessage, setHoverMessage] = useState('');

  // showImage
  const [showImage, setShowImage] = useState(false);

  // loadDataFromJson
  const [jsonData, setJsonData] = useState(null);
  const sampleData = [
    { id: 1, name: 'React', type: 'Biblioteka', year: 2013 },
    { id: 2, name: 'Vue', type: 'Framework', year: 2014 },
    { id: 3, name: 'Angular', type: 'Framework', year: 2016 },
    { id: 4, name: 'Svelte', type: 'Framework', year: 2016 }
  ];

  // uploadFile
  const [fileName, setFileName] = useState('');

  // changeStyle
  const [elementStyle, setElementStyle] = useState({
    color: 'var(--color-text)',
    fontSize: 'var(--font-size-base)',
    background: 'var(--color-bg-6)',
    padding: 'var(--space-24)'
  });

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
    setHoverMessage('Myszka jest nad elementem!');
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setHoverMessage('');
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const loadDataFromJson = () => {
    setJsonData(sampleData);
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const changeStyle = () => {
    const colors = ['var(--color-teal-500)', 'var(--color-orange-500)', 'var(--color-red-500)'];
    const fontSizes = ['var(--font-size-base)', 'var(--font-size-xl)', 'var(--font-size-3xl)'];
    const backgrounds = ['var(--color-bg-1)', 'var(--color-bg-3)', 'var(--color-bg-7)'];

    setElementStyle(prevStyle => ({
      ...prevStyle,
      color: colors[Math.floor(Math.random() * colors.length)],
      fontSize: fontSizes[Math.floor(Math.random() * fontSizes.length)],
      background: backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }));
  };

  return (
    <div className="functional-grid">
      {/* handleClick */}
      <div className="functional-section">
        <h3>handleClick - Licznik kliknięć</h3>
        <button className="btn btn-primary" onClick={handleClick}>
          Kliknij mnie!
        </button>
        <div className="click-count">
          Liczba kliknięć: {clickCount}
        </div>
      </div>

      {/* handleMouseOver */}
      <div className="functional-section">
        <h3>handleMouseOver - Zmiana koloru przy najechaniu</h3>
        <div
          className="hover-box"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            background: isHovered ? 'var(--color-primary)' : 'var(--color-surface)',
            color: isHovered ? 'var(--color-btn-primary-text)' : 'var(--color-text)'
          }}
        >
          Najedź na mnie myszką!
        </div>
        {hoverMessage ? (
          <div className="hover-message">{hoverMessage}</div>
        ) : null}
      </div>

      {/* showImage */}
      <div className="functional-section">
        <h3>showImage - Przełączanie widoczności obrazu</h3>
        <button className="btn btn-secondary" onClick={toggleImage}>
          {showImage ? 'Ukryj obraz' : 'Pokaż obraz'}
        </button>
        {showImage ? (
          <div className="image-placeholder">
            🖼️ Placeholder Image
          </div>
        ) : null}
      </div>

      {/* loadDataFromJson */}
      <div className="functional-section">
        <h3>loadDataFromJson - Ładowanie danych JSON</h3>
        <button className="btn btn-primary" onClick={loadDataFromJson}>
          Załaduj dane JSON
        </button>
        {jsonData ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa</th>
                <th>Typ</th>
                <th>Rok</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>

      {/* uploadFile */}
      <div className="functional-section">
        <h3>uploadFile - Wybór pliku</h3>
        <input
          type="file"
          className="file-input"
          onChange={handleFileUpload}
        />
        {fileName ? (
          <div className="file-name">
            Wybrany plik: {fileName}
          </div>
        ) : null}
      </div>

      {/* changeStyle */}
      <div className="functional-section">
        <h3>changeStyle - Dynamiczna zmiana stylów</h3>
        <button className="btn btn-secondary" onClick={changeStyle}>
          Zmień style
        </button>
        <div className="styled-element" style={elementStyle}>
          Ten element zmienia swoje style!
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeExercise, setActiveExercise] = useState('exercise1');

  const exercises = [
    { id: 'exercise1', name: 'Ćwiczenie 1', title: 'Toggle Details', component: ToggleDetails },
    { id: 'exercise2', name: 'Ćwiczenie 2', title: 'Score Display', component: ScoreDisplay },
    { id: 'exercise3', name: 'Ćwiczenie 3', title: 'Task List', component: TaskList },
    { id: 'exercise4', name: 'Ćwiczenie 4', title: 'User List', component: UserList },
    { id: 'exercise5', name: 'Ćwiczenie 5', title: 'Timer Counter', component: TimerCounter },
    { id: 'task3', name: 'Zadanie 3', title: 'Komponenty Funkcyjne', component: FunctionalComponents }
  ];

  const currentExercise = exercises.find(ex => ex.id === activeExercise);
  const CurrentComponent = currentExercise.component;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Ćwiczenia &amp; Zadania</h1>
        <p>Interaktywne ćwiczenia z React Hooks i obsługą zdarzeń</p>
      </header>

      <nav className="nav-container">
        {exercises.map(exercise => (
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
        <h2 className="section-title">{currentExercise.name}: {currentExercise.title}</h2>
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
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);