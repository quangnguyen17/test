/**
 * Star Wars API client
 * https://swapi.co/
 */

const baseURL = 'https://swapi.dev/api'

const getShips = async () => {
  return fetch(`${baseURL}/starships/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((error) => {
      return { error, results: [] }
    })
}

export const api = { getShips }
