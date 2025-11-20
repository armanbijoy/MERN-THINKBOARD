import rateLimit from "../config/uptash.js"

// Middleware to limit the number of requests a client can make in a given time
export const rateLimitter = async (req, res, next) => {
  try {
    // Call the rateLimit function from uptash.js
    
    const { success } = await rateLimit.limit("my-limit-key")

    // If the limit is exceeded, Too Many Requests response
    if (!success) {
      return res.status(429).json({
        message: 'Too Many requests, please try again later'
      })
    }

    
    next()

  } catch (err) {
    
    console.log("Rate Limit Error!!")
   
  }
}
