import {useState, useEffect} from 'react'

import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [timer, updateTimer] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      updateTimer(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {timer.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
