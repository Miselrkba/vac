import { useState } from 'react'
import data from '../data/vacations.json'

export const Filter = ({ onFilterChange }) => {
  const [selectedUser, setSelectedUser] = useState('Všetci používatelia')
  const [selectedTeam, setSelectedTeam] = useState('Všetci používatelia')
  const [focusedUser, setFocusedUser] = useState({
    name: 'Všetci používatelia',
    team: 'Všetci používatelia',
    role: 'N/A',
  })

  const handleChange = () => {
    const user = data.users.find((u) => u.name === selectedUser)

    setFocusedUser({
      name: selectedUser,
      team: selectedTeam,
      role: user ? user.role : 'N/A',
    })

    onFilterChange({
      user: selectedUser,
      team: selectedTeam,
    })
  }

  return (
    <div className="filter-section">
      <div className="filters">
        <label>
          Teams:
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            {data.teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </label>

        <label>
          Users:
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="Všetci používatelia">Všetci používatelia</option>
            {data.users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>
        </label>

        <button onClick={handleChange}>Change</button>
      </div>

      <div className="focused-user">
        Focused User: <strong>{focusedUser.name}</strong> | Team:{' '}
        <strong>{focusedUser.team}</strong> | Role:{' '}
        <strong>{focusedUser.role}</strong>
      </div>
    </div>
  )
}
