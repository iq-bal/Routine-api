const exppress = require('express')
const app = exppress();
const Routine = require('../model/RoutineSchema');

const getAll = async (req, res) => {
    try {
        const routine = await Routine.find();
        res.status(200).json(routine);
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (req, res) => {
    try {
        const { sec ,day } = req.params;
        let filteredRoutine = await Routine.find();
        if (sec) {
            if (sec === 'A' || sec === 'B') {
                filteredRoutine = filteredRoutine.filter((routine) => routine.section === sec)
            }
            else {
                res.status(404).json({ msg: `no routine found for section '${sec}'... consider rechecking your spelling. section should be in upper case` })
            }
        }
        if(day){
            if(day==='sunday' || day==='monday' || day==='tuesday' || day==='wednesday' || day==='thursday' || day==='friday' || day==='saturday'){
                filteredRoutine = filteredRoutine[0][day]
            }
            else{
                res.status(404).json({ msg: `no routine found for day '${day}'... consider rechecking your spelling` })
            }
        }
        res.status(200).json(filteredRoutine);
    } catch (error) {
        console.log(error);
    }
}

const sectionRoutine = async (req,res)=>{
    try {
        const {sec} = req.params; 
        let filteredRoutine = await Routine.find();
        if (sec) {
            if (sec === 'A' || sec === 'B') {
                filteredRoutine = filteredRoutine.filter((routine) => routine.section === sec)
            }
            else {
                res.status(404).json({ msg: `no routine found for section '${sec}'... consider rechecking your spelling. section should be in upper case` })
            }
        }
        res.status(200).json(filteredRoutine[0]); 
    } catch (error) {
        console.log(error); 
    }
}

/* these are for admin only */
const createRoutine = async (req, res) => {
    try {
        const routine = await Routine.create(req.body);
        res.status(201).json(routine);
    } catch (error) {
        console.log(error);
    }
}

const updateRoutine = async (req,res)=>{
    
}

const deleteRoutine = async (req,res)=>{
    
}

module.exports = { getAll, getOne, createRoutine, updateRoutine, sectionRoutine, deleteRoutine}