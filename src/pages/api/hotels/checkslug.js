import connectDB from '../../../middleware/mongodb'
import Hotel from '../../../models/Hotel'

const handler = async (req, res) => {
  const response = await Hotel.find({slug: req.body}, {slug: 1})
  if (response.length > 0) {res.json({state: true})} else {res.json({state: false})}
}

export default connectDB(handler)
