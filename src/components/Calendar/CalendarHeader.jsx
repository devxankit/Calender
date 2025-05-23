import React from 'react'
import dayjs from 'dayjs'

const CalendarHeader = ({ month, year, onNext, onPrev, onToday }) => {
  const currentLabel = dayjs(new Date(year, month)).format('MMMM YYYY')

  return (
    <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-white">
    {dayjs(new Date(year, month)).format('MMMM YYYY')}
  </h2>
  <div className="space-x-2">
    <button
      onClick={onPrev}
      className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
    >
      Prev
    </button>
    <button
      onClick={onToday}
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      Today
    </button>
    <button
      onClick={onNext}
      className="bg-gray-800 text-white px-3 py-1 rounded"
    >
      Next
    </button>
  </div>
</div>
  )
}

export default CalendarHeader
