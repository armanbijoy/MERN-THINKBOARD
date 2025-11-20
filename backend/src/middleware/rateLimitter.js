
import rateLimit from "../config/uptash.js"

export const rateLimitter = async (req, res, next)=>{

  try{
    const {success} = await rateLimit.limit("my-limit-key")

    if(!success){
      return res.status(429).json({message: 'Too Many request, please try again later'})
    }
    next()

  }catch(err){
    console.log("Rate Limit Error!!")
  }

}

