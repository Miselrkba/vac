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
  const [vacations, setVacations] = useState(data.vacations)
  const [filteredData, setFilteredData] = useState(data.vacations)

  const handleFilterChange = ({ user }) => {
    let filteredVacations = vacations

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

  const handleAddVacation = (newVacation) => {
    const newId =
      vacations.length > 0 ? Math.max(...vacations.map((v) => v.id)) + 1 : 1
    const vacationToAdd = {
      id: newId,
      ...newVacation,
    }
    const updatedVacations = [...vacations, vacationToAdd]
    setVacations(updatedVacations)
    setFilteredData(updatedVacations)
  }

  const handleDelete = (id) => {
    const updatedVacations = vacations.filter((vacation) => vacation.id !== id)
    setVacations(updatedVacations)
    setFilteredData(updatedVacations)
  }

  return (
    <div className="container">
      <Header title="Vacation" />
      <Filter onFilterChange={handleFilterChange} />
      <AddNewButton onAddVacation={handleAddVacation} />
      <VacationTable vacations={filteredData} onDelete={handleDelete} />
    </div>
  )
}

export default Page
