import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

// Database
export const db = knex({
  // client: "mysql",
  client: "sqlite3",
  connection: {
    // user: process.env.PGUSER,
    // host: process.env.PGHOST,
    // password: process.env.PGPASSWORD,
    // database: process.env.PGDATABASE,
    // port: Number(process.env.PGPORT),
    // filename: "./mydb.sqlite",
  },
  useNullAsDefault: true,
})

// Create table
;(async () => {
  NewsLetter: {
    const tableName = "newsletter"
    const newsletter = await db.schema.hasTable(tableName)
    if (newsletter) return

    await db.schema.createTable(tableName, (table) => {
      table.uuid("id").primary()
      table.string("name").notNullable()
      table.string("email").unique().notNullable()
      table.timestamp("createdAt").defaultTo(db.fn.now())
    })
  }
})()
