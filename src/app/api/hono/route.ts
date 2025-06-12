import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()

app.use('*', async (c, next) => {
  const start = Date.now()
  await next()
  const duration = Date.now() - start
  console.log(
    `${new Date().toISOString()} ${c.req.method} ${c.req.url} ${duration}ms`
  )
})

app.get('/', (c) => c.text('Hello from Hono'))

export const GET = handle(app)
export const POST = handle(app)
export const ALL = handle(app)

