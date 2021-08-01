import express from 'express'
import { getAllUsers, getUserById } from '../controllers/userController'
import isAuthorizedUser from '../middlewares/authHandler'
const router = express.Router()

router.get('/getAllUsers', isAuthorizedUser, getAllUsers)
router.get('/getUserById/:id', isAuthorizedUser, getUserById)

export default router
