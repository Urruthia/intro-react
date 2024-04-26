import { z } from "zod";

const schema = z.object({
    NEXT_PUBLIC_API_URL: z.string(),
    NEXT_PUBLIC_API_KEY: z.string(),
})

export const parsedEnv = schema.parse(process.env);