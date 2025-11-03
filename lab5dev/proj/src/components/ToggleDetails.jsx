import { useState } from 'react'

const ToggleDetails = () => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>

      {showDetails ? (
        <div className="details-box">
          <h3>Szczegóły</h3>
          <p>
            To jest przykład komponentu toggle używającego React hooks. Stan komponentu jest
            zarządzany przez useState hook, który pozwala na dynamiczne pokazywanie i ukrywanie
            zawartości.
          </p>
          <ul>
            <li>Użyto useState do zarządzania stanem</li>
            <li>Przycisk zmienia tekst dynamicznie</li>
            <li>Renderowanie warunkowe za pomocą operatora warunkowego</li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default ToggleDetails
