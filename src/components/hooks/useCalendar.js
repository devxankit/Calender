import { useState, useMemo } from 'react'
import dayjs from 'dayjs'

const generateCalendarDays = (month, year) => {
  const startOfMonth = dayjs(new Date(year, month, 1))
  const endOfMonth = startOfMonth.endOf('month')

  const startDate = startOfMonth.startOf('week') // Sunday
  const endDate = endOfMonth.endOf('week')

  const totalDays = endDate.diff(startDate, 'day') + 1
  const days = []

  for (let i = 0; i < totalDays; i++) {
    const date = startDate.add(i, 'day')
    days.push({
      date,
      currentMonth: date.month() === month
    })
  }

  return days
}

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs())

  const month = currentDate.month()
  const year = currentDate.year()

  const days = useMemo(() => generateCalendarDays(month, year), [month, year])

  const goToNextMonth = () => setCurrentDate(prev => prev.add(1, 'month'))
  const goToPrevMonth = () => setCurrentDate(prev => prev.subtract(1, 'month'))
  const goToToday = () => setCurrentDate(dayjs())

  return {
    days,
    month,
    year,
    goToNextMonth,
    goToPrevMonth,
    goToToday
  }
}

export default useCalendar
