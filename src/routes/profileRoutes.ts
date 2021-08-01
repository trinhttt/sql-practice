import express from 'express'
import { getProfile, updateProfile } from '../controllers/profileController'
import isAuthorizedUser from '../middlewares/authHandler'

const router = express.Router()

router.get('/getProfile/:id', isAuthorizedUser, getProfile)
router.post('/updateProfile/:id', isAuthorizedUser, updateProfile)

export default router
