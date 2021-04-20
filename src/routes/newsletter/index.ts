// import { RouteOptions } from "fastify"

// const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// export const registration: RouteOptions = {
//   method: "POST",
//   url: "/registration",
//   schema: {
//     body: {
//       type: "object",
//       properties: {
//         name: { type: "string" },
//       },
//     },
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           hello: { type: "string" },
//         },
//       },
//     },
//   },
//   handler: async (req, res) => {
//     try {
//       const { name, email } = req.body

//       if (!emailRegex.test(email)) {
//         return res.status(400).send({ message: "Invalid Email" })
//       }
//       let data: any
//       data = await db("newsletter").insert({ id: v4(), name, email }, "*")
//       return res.status(200).send(data)
//     } catch (error) {
//       let message = errorHandler(error)
//       return res.status(400).send({ message })
//     }
//   },
// }
