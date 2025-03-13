import { useState } from 'react'
import axios from 'axios'
import { apiResponseSchema, Pokemon } from './types'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemon, setPokemon] = useState<Pokemon>({
    base_experience: 0,
    height: 0,
    id: 0,
    name: "",
    sprites: { front_default: "" },
    stats: [],
    types: [],
    weight: 0
  })
  const [search, setSearch] = useState("")

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${search}`)
      const result = apiResponseSchema.safeParse(data)
      if (result.success) {
        setPokemon(result.data)
      }
    } catch (error) {
      alert("Pokémon not found")
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetchData()
  }

  return (
    <div className='flex flex-col gap-y-7 items-center'>
      <h1 className='font-body font-bold text-center'>PokéFinder</h1>

      <div className=' bg-white p-3 rounded-2xl shadow-card'>
        <form onSubmit={handleSubmit} className='text-center mb-8'>
          <label htmlFor='search'>Search for Pokémon Name or ID:</label>
          <div className='mt-3'>
            <input type="text" id='search' value={search} onChange={handleChange} required className='border h-10 outline-blue-500 mr-2 indent-2.5' />
            <button type='submit' className='px-4 py-3 rounded-3xl bg-primary text-white text-sm'>Search</button>
          </div>
        </form>

        <PokemonCard pokemon={pokemon} />
      </div>
    </div>
  )
}

export default App
