const errorHandler = (error: any): string | Error => {
  // Duplicate constraints
  if (error.code === "23505") {
    // Getting values inside parentheses
    const rxp = /\(([^)]+)\)/
    const key = rxp.exec(error.detail)
    if (key) {
      return "Email already registered for giveaway."
      // return `DUPLICATE: ${key[1]}`
    }
  }

  // Foregin key
  if (error.code === "23503") {
    return `FOREIGN_KEY`
  }

  // Default
  return new Error(error)
}

export default errorHandler
