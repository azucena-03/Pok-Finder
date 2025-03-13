import { z } from "zod"

export const apiResponseSchema = z.object({
    base_experience: z.number(),
    height: z.number(),
    id: z.number(),
    name: z.string(),
    sprites: z.object({
        front_default: z.string()
    }),
    stats: z.array(
        z.object({
            base_stat: z.number(),
            stat: z.object({
                name: z.string(),
            })
        })
    ),
    types: z.array(
        z.object({
            type: z.object({
                name: z.string(),
            })
        })
    ),
    weight: z.number()
})

export type Pokemon = z.infer<typeof apiResponseSchema>