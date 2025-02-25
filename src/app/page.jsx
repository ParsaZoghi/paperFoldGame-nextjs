'use client'

import { useState, useEffect } from 'react'

import Headings from './components/Headings/Headings'
import Figure from './components/Figure/Figure'
import Details from './components/Details/Details'
import Buttons from './components/Buttons/Buttons'

import './style.scss'

export default function Home() {
  const [states, setStates] = useState({
    isLoading: true,
    folds: 0,
    curFold: {},
    maxFold: 0
  })

  const fetchData = async () => {
    setStates(prevStates => ({ ...prevStates, isLoading: true }))

    try {
      const res = await fetch('/api', {
        headers: {
          Accept: 'application/json',
          method: 'GET'
        }
      })

      if (res.ok) {
        const data = await res.json()

        setStates(prevStates => ({ ...prevStates, curFold: { ...data.folds[states.folds] } }))
        setStates(prevStates => ({ ...prevStates, maxFold: data.folds.length - 1 }))
      }

    } catch (err) {
      console.error(err)

    } finally {
      setStates(prevStates => ({ ...prevStates, isLoading: false }))
    }
  }

  useEffect(() => {
    fetchData()
  }, [states.folds])

  return (
    <main>
      <Headings states={states} />
      <Figure states={states} />
      <Details states={states} />
      <Buttons states={states} setStates={setStates} />
    </main>
  )
}
