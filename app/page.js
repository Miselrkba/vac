'use client'
import { useState } from 'react'
import './globals.scss'
import './styles.scss'
import Header from '../components/Header'
import Filter from '../components/Filter'
import AddNewButton from '../components/AddNewButton'
import VacationTable from '../components/VacationTable'
import data from '../data/vacations.json'

const Page = () => {
  const [filteredData, setFilteredData] = useState(data.vacations)

  const handleFilterChange = ({ user }) => {
    let filteredVacations = data.vacations

    if (user !== 'Všetci používatelia') {
      const selectedUser = data.users.find((u) => u.name === user)
      if (selectedUser) {
        filteredVacations = filteredVacations.filter(
          (vacation) => vacation.userId === selectedUser.id,
        )
      }
    }

    setFilteredData(filteredVacations)
  }

  return (
    <div className="container">
      <Header title="Vacation" />
      <Filter onFilterChange={handleFilterChange} />
      <AddNewButton />
      <VacationTable vacations={filteredData} />
    </div>
  )
}

export default Page
