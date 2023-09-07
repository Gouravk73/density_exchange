import React from 'react'
import VacanciContainer from './VacanciContainer'

const Vacancies = () => {
  return (
    <div className='flex p-4'>
        <VacanciContainer title="Senior Full Stack Engineer"/>
        <VacanciContainer title="Senior Designer"/>
        <VacanciContainer title="Superstar Intern"/>
    </div>
  )
}

export default Vacancies