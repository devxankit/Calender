import { useState, useEffect } from 'react'
import eventsData from '../../data/events.json'
import dayjs from 'dayjs'

const useEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const parsedEvents = eventsData.events.map(event => ({
      ...event,
      date: dayjs(event.date)
    }))
    setEvents(parsedEvents)
  }, [])

  return events
}

export default useEvents
