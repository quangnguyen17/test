/**
 * Star Wars API client
 * https://swapi.co/
 */
import data from './data.json'

export const mockFetch = async (url) => {
  console.log(url)
  const [, page] = url.match(/.*page=([0-9]*)\/?$/)
  await new Promise((res) => {
    setTimeout(res, 2000)
  })
  const pg = (Number(page || 0) + 1) % data.length
  return { json: () => data[pg] }
}
