import { z } from 'zod'

// Using zod to validate the environment variables
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_S3_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )
  // flatten(): transform the error object into a readable format

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
