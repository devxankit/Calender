import React from 'react'
import useCalendar from '../hooks/useCalendar'
import useEvents from '../hooks/useEvents'
import CalendarHeader from './CalendarHeader'
import CalendarGrid from './CalendarGrid'

const Calendar = () => {
  const { days, month, year, goToNextMonth, goToPrevMonth, goToToday } = useCalendar()
  const events = useEvents()

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <CalendarHeader
        month={month}
        year={year}
        onNext={goToNextMonth}
        onPrev={goToPrevMonth}
        onToday={goToToday}
      />
      <CalendarGrid days={days} events={events} />
    </div>
  )
}

export default Calendar
