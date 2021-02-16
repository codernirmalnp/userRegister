import express from 'express'
import AuthCtrl from '../controllers/auth.controller'
const router=express.Router()
router.route('/auth/signin').post(AuthCtrl.signIn)
router.route('/auth/signout').get(AuthCtrl.signOut)


export default router;