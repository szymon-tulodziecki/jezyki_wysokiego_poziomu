import { useState } from 'react'

const FunctionalComponents = () => {
  const [clickCount, setClickCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hoverMessage, setHoverMessage] = useState('')
  const [showImage, setShowImage] = useState(false)
  const [jsonData, setJsonData] = useState(null)
  const sampleData = [
    { id: 1, name: 'React', type: 'Biblioteka', year: 2013 },
    { id: 2, name: 'Vue', type: 'Framework', year: 2014 },
    { id: 3, name: 'Angular', type: 'Framework', year: 2016 },
    { id: 4, name: 'Svelte', type: 'Framework', year: 2016 },
  ]
  const [fileName, setFileName] = useState('')
  const [elementStyle, setElementStyle] = useState({
    color: 'var(--color-text)',
    fontSize: 'var(--font-size-base)',
    background: 'var(--color-bg-6)',
    padding: 'var(--space-24)',
  })

  const handleClick = () => setClickCount(clickCount + 1)
  const handleMouseOver = () => {
    setIsHovered(true)
    setHoverMessage('Myszka jest nad elementem!')
  }
  const handleMouseOut = () => {
    setIsHovered(false)
    setHoverMessage('')
  }
  const toggleImage = () => setShowImage(!showImage)
  const loadDataFromJson = () => setJsonData(sampleData)
  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }
  const changeStyle = () => {
    const colors = ['var(--color-teal-500)', 'var(--color-orange-500)', 'var(--color-red-500)']
    const fontSizes = ['var(--font-size-base)', 'var(--font-size-xl)', 'var(--font-size-3xl)']
    const backgrounds = ['var(--color-bg-1)', 'var(--color-bg-3)', 'var(--color-bg-7)']
    setElementStyle((prev) => ({
      ...prev,
      color: colors[Math.floor(Math.random() * colors.length)],
      fontSize: fontSizes[Math.floor(Math.random() * fontSizes.length)],
      background: backgrounds[Math.floor(Math.random() * backgrounds.length)],
    }))
  }

  return (
    <div className="functional-grid">
      <div className="functional-section">
        <h3>handleClick - Licznik kliknięć</h3>
        <button className="btn btn-primary" onClick={handleClick}>
          Kliknij mnie!
        </button>
        <div className="click-count">Liczba kliknięć: {clickCount}</div>
      </div>

      <div className="functional-section">
        <h3>handleMouseOver - Zmiana koloru przy najechaniu</h3>
        <div
          className="hover-box"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            background: isHovered ? 'var(--color-primary)' : 'var(--color-surface)',
            color: isHovered ? 'var(--color-btn-primary-text)' : 'var(--color-text)',
          }}
        >
          Najedź na mnie myszką!
        </div>
        {hoverMessage ? <div className="hover-message">{hoverMessage}</div> : null}
      </div>

      <div className="functional-section">
        <h3>showImage - Przełączanie widoczności obrazu</h3>
        <button className="btn btn-secondary" onClick={toggleImage}>
          {showImage ? 'Ukryj obraz' : 'Pokaż obraz'}
        </button>
        {showImage ? (
          <img
            className="image-responsive"
            src="https://picsum.photos/seed/reacthooks/800/500"
            alt="Losowy obraz z Picsum"
            loading="lazy"
          />
        ) : null}
      </div>

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
              {jsonData.map((item) => (
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

      <div className="functional-section">
        <h3>uploadFile - Wybór pliku</h3>
        <input type="file" className="file-input" onChange={handleFileUpload} />
        {fileName ? <div className="file-name">Wybrany plik: {fileName}</div> : null}
      </div>

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
  )
}

export default FunctionalComponents
