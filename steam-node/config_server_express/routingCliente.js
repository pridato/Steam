const express=require('express');
const router=express.Router(); //<----- objeto router a exportar...

const clienteController=require('../controllers/clienteController');
router.post('/Registro', clienteController.registro );


module.exports=router;