import { Pokemon } from '../types'
import PokemonTypeBadge from './PokemonTypeBadge';
import Tr from './Tr'

type PokemonCardProps = {
    pokemon: Pokemon
}

function PokemonCard({ pokemon: { name, id, weight, height, sprites, types, stats } }: PokemonCardProps) {

    return (
        <>
            <div className='px-3 min-h-[320px]'>
                {name !== "" && (
                    <>
                        <h2 className='font-body font-semibold uppercase'>{name} #{id}</h2>
                        <div className='flex gap-x-1'>
                            <p>Weight: {weight}</p>
                            <p>Height: {height}</p>
                        </div>
                        <img src={sprites.front_default} alt={name} className='w-1/2 mx-auto py-4' />
                        <div className='mb-4'>
                            {types.map(({ type }, index) => (
                                <PokemonTypeBadge key={index} type={type} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <table className='text-center w-full text-white border-separate border-spacing-1'>
                <thead>
                    <tr className='text-lg md:text-xl'>
                        <th scope="col" className='bg-primary font-semibold py-1.5 md:px-28 px-18'>Base</th>
                        <th scope="col" className='bg-primary font-semibold py-1.5 px-10'>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map(stat => (
                        <Tr stat={stat} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PokemonCard
