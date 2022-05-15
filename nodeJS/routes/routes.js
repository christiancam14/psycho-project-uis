import express from 'express'
import { getAllLocation, getLocation, createLocation, updateLocation, deleteLocation} from '../controllers/LocationController.js'
const router = express.Router()

router.get('/', getAllLocation)
router.get('/:id', getLocation)
router.post('/', createLocation)
router.put('/id', updateLocation)
router.delete('/id', deleteLocation)

export default router