'use client'
import './styles.scss'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Filter } from '../components/Filter'
import { VacationTable } from '../components/VacationTable'
import { AddNewButton } from '../components/AddNewButton'
import data from '../data/vacations.json'

const Page = () => {
  const [filteredData, setFilteredData] = useState(data.vacations)

  const handleFilterChange = ({ user, team }) => {
    let filteredVacations = data.vacations

    // Filter by user
    if (user !== 'Všetci používatelia') {
      const selectedUser = data.users.find((u) => u.name === user)
      if (selectedUser) {
        filteredVacations = filteredVacations.filter(
          (vacation) => vacation.userId === selectedUser.id,
        )
      }
    }

    // Filter by team (optional for team filtering)
    if (team !== 'Všetci používatelia') {
      // Extend logic here for team filtering if needed
    }

    setFilteredData(filteredVacations)
  }

  return (
    <div className="container">
      <Header />
      <Filter onFilterChange={handleFilterChange} />
      <AddNewButton />
      <VacationTable vacations={filteredData} />
    </div>
  )
}

export default Page
