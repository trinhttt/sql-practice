import express from 'express'
import { registerUser, login } from '../controllers/authController'

const router = express.Router()

router.post('/create', registerUser)
router.post('/login', login)

export default router
