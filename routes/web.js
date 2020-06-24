const { Router } = require('express')
const router = Router()
const HomeController = require('../http/controllers/HomeController')
const ProfileController = require('../http/controllers/ProfileController')

const home = router.get('/', HomeController.index)
const profile = router.get('/profile', ProfileController.index)

module.exports = {home, profile}