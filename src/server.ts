import fastify from "fastify"
import fastifyCors from "fastify-cors"
import fastifyFormbody from "fastify-formbody"
import fastifyStatic from "fastify-static"
import { db } from "./db"
import { v4 } from "uuid"
import errorHandler from "./utils/errorHandler"
import path from "path"

// Fastify
const server = fastify({ logger: true })
const PORT = process.env.PORT || 3010

// Plugins
server.register(fastifyCors).register(fastifyFormbody)

if (process.env.NODE_ENV === "production") {
  server.register(fastifyStatic, {
    root: path.join(__dirname, "../client/dist"),
  })

  server.get("/giveaway", (_request, reply) => {
    reply.sendFile("giveaway.html")
  })

  server.setNotFoundHandler((_request, reply) => {
    reply.sendFile("not-found.html")
  })
}

// Routes
interface RegistrationBody {
  name: string
  email: string
}
server.post<{ Body: RegistrationBody }>("/registration", async (req, res) => {
  try {
    const { name, email } = req.body

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email)) {
      return res.status(400).send({ message: "Invalid Email" })
    }
    let data = await db("newsletter").insert({ id: v4(), name, email, createdAt: new Date() }, "*")
    return res.status(200).send(data)
  } catch (error) {
    let message = errorHandler(error)
    return res.status(400).send({ message })
  }
})

server.get("/registrationEmails", async (_req, res) => {
  try {
    const emails = await db("newsletter").select("*")
    return res.status(200).send(emails)
  } catch (error) {
    let message = errorHandler(error)
    return res.status(400).send({ message })
  }
})

server.get("/newsletterEmails", async (_req, res) => {
  const data = await db("newsletter").select("*")

  return res.status(200).send(data)
})

// Init
;(async () => {
  try {
    await server.listen(PORT, "0.0.0.0")
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
})()
