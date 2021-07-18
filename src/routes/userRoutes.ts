import express from 'express'
import { getAllUsers, getUserById } from '../controllers/userController'

const router = express.Router()

router.post('/getAllUsers', getAllUsers)
router.post('/getUserById', getUserById)

export default router
