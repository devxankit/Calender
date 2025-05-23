import React from 'react'
import CalendarDay from './CalendarDay'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CalendarGrid = ({ days , events }) => {
  return (
<div className="grid grid-cols-7 border border-gray-700 bg-black text-white">
  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
    <div
      key={day}
      className="text-center font-semibold text-sm py-2 border border-gray-700 bg-gray-900"
    >
      {day}
    </div>
  ))}

  {days.map(({ date, currentMonth }, idx) => {
    const dayEvents = events.filter(ev => ev.date.isSame(date, 'day'))

    return (
      <CalendarDay
        key={idx}
        date={date}
        currentMonth={currentMonth}
        events={dayEvents}
      />
    )
  })}
</div>
  )
}

export default CalendarGrid
