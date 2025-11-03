import { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Ładowanie użytkowników...</div>
  }

  return (
    <div>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-name">{user.name}</div>
            <div className="user-email">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-7v-.01H4zm16 12V8l-8 7-8-7v10h16z" />
              </svg>
              {user.email}
            </div>
            <div className="user-company">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 21h18v-2H3v2zm2-4h14V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12zm2-2V5h10v10H7z" />
              </svg>
              {user.company.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
