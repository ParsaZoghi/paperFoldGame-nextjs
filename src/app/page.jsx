"use client"

import { useState, useEffect } from "react"

import Headings from './components/Headings/Headings'
import Figure from './components/Figure/Figure'
import Details from './components/Details/Details'
import Buttons from './components/Buttons/Buttons'

import './style.scss'

export default function Home() {
  const [folds, setFolds] = useState(0)
  const [curFold, setCurFold] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchDataFromApi = async () => {
    setIsLoading(true)

    try {
      const res = await fetch("/api", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      })

      if (res.ok) {
        const data = await res.json()

        setCurFold({ ...data.folds[folds] })
      }

    } catch (err) {
      console.error(err)

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataFromApi()
  }, [folds])

  return (
    <main>
      <>
        <Headings folds={folds} />
        <Figure isLoading={isLoading} curFold={curFold} />
        <Details isLoading={isLoading} curFold={curFold} />
        <Buttons isLoading={isLoading} folds={folds} setFolds={setFolds} />
      </>
    </main>
  )
}
