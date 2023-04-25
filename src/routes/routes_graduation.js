const {Router} = require('express')
const {Login} = require('../controllers/login')
const {createUser} = require('../controllers/signup')
const {getComments, SubmitComment} = require('../controllers/comments')

const router = Router()

router.post('/',Login)
router.get('/comments', getComments)
router.post('/signup',createUser)
router.post('/scomment', SubmitComment)

module.exports = router;