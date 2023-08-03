const express = require('express'); 
const { model } = require('mongoose');
const {getAll,getOne,createRoutine,updateRoutine, sectionRoutine, deleteRoutine} = require('../controllers/routine');
const router = express.Router();

router.route('/').get(getAll).post(createRoutine).delete(deleteRoutine)
router.route('/:sec/:day').get(getOne).patch(updateRoutine); 
router.route('/:sec').get(sectionRoutine); 

module.exports = router; 