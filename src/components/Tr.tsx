import { Pokemon } from "../types"

type TrProps = {
    stat: Pokemon['stats'][0]
}

export default function Tr({ stat: { base_stat, stat } }: TrProps) {
    return (
        <tr className="text-lg md:text-xl">
            <th scope="row" className='bg-primary font-normal capitalize py-1.5'>{stat.name}:</th>
            <td className='bg-primary py-1'>{base_stat}</td>
        </tr>
    )
}
