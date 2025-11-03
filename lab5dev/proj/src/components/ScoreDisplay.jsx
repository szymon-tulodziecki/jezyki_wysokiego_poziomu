import { useState } from 'react'

const ScoreDisplay = () => {
  const [score, setScore] = useState(50)

  let scoreMessage
  if (score < 50) {
    scoreMessage = <div className="score-message score-low">Za mało punktów</div>
  } else if (score >= 50 && score <= 80) {
    scoreMessage = <div className="score-message score-medium">W sam raz</div>
  } else {
    scoreMessage = <div className="score-message score-high">Super wynik!</div>
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
  )
}

export default ScoreDisplay
