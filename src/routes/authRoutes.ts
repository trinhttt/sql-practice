import express from 'express'
import { registerUser, login } from '../controllers/authController'

const router = express.Router()

router.post('/create', registerUser)
router.get('/login', login)

export default router
