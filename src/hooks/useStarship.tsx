import { useEffect, useState } from 'react'
import { api } from '../starwars'

export interface IStarship {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  films: string[]
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  mode: string
  name: string
  passengers: string
  pilots: string[]
  starship_class: string
  url: string
}

export interface IStarshipResult {
  count: number
  next: string
  previous: number | null
  results: IStarship[]
}

export const useStarship = () => {
  const [ships, setShips] = useState<IStarshipResult>()

  const fetchShips = async () => {
    let results = await api.getShips()

    setShips(results)
  }

  useEffect(() => {
    fetchShips()
  }, [])

  return {
    loadShips: () => fetchShips(),
    ships,
    loading: ships?.results ? ships.results.length < 0 : true
  }
}
