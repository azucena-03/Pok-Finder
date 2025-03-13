type PokemonTypeBadgeProps = {
    type: {
        name: string;
    }
}

export default function PokemonTypeBadge({ type: { name } }: PokemonTypeBadgeProps) {

    return (
        <span className={`bg-amber-500 ${name} uppercase text-sm px-1.5 py-2 rounded-md mr-1.5`}>{name}</span>
    )
}
