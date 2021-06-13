const router=require('express').Router()
const employFunctions=require('./controllers/users')
const adminFunction =require('./controllers/admin')

router.post('/checkPremission',employFunctions.checkPremission)
router.get('/getAllEmployed',employFunctions.getAllEmployed)
router.get('/getEmployedById/:userId',employFunctions.getEmployedById)
router.post('/setNewEmployed',employFunctions.setNewEmployed)



router.post('/updateEmployed/:userId',adminFunction.updateEmployed)


module.exports = router
