import dayjs from 'dayjs'

const CalendarDay = ({ date, currentMonth, events = [] }) => {
  const isToday = dayjs().isSame(date, 'day')

  return (
    <div
      className={`h-28 p-1 border border-gray-700 text-xs relative transition
        ${!currentMonth ? 'bg-gray-800 text-gray-500' : 'bg-gray-900'}
        ${isToday ? 'border-red-500  font-bold text-blue-400' : ''}
        hover:bg-blue-950`}
    >
      <div className="text-right text-white text-sm">{date.date()}</div>

      <div className="mt-1 space-y-1">
        {events.slice(0, 2).map(event => (
          <div
            key={event.id}
            className="text-white text-[10px] px-1 py-0.5 rounded truncate"
            style={{ backgroundColor: event.color }}
          >
            {event.title}
          </div>
        ))}

        {events.length > 2 && (
          <div className="text-[10px] text-blue-300">+{events.length - 2} more</div>
        )}
      </div>
    </div>
  )
}

export default CalendarDay
