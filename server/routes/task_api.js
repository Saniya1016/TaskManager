import express from 'express';
import { Task } from '../modules/task.js';
import table from '../modules/manage.js';

const router = express.Router();

router.get('/get', (req, res) => {
    try{
        const tasks = table.view_tasks();
        res.json(tasks);
    } catch(err){
        console.error(err);
    }
    res.end();
});

router.post('/add', (req, res) => {
    try {
        if(req.body.id !== undefined && req.body.name !== undefined && req.body.description !== undefined && req.body.difficulty !== undefined && req.body.due_date !== undefined){
            let task = new Task(req.body.id, req.body.name, req.body.description, req.body.difficulty, req.body.due_date);
            table.add(task);
            res.status(200).send("Add Success");
        } else{
            res.status(500).send("Body element undefined");
        } 
    } catch(err){
        console.error(err);
    }
});

router.put('/updateName', (req, res) => {
    try {
        if(req.body.id !== undefined && req.body.name !== undefined){
            table.update_name(req.body.id, req.body.name);
            res.status(200).send("Add Success");
        } else{
            res.status(500).send("Body element undefined");
        } 
    } catch(err){
        console.error(err);
    }
});

router.put('/updateDifficulty', (req, res) => {
    try {
        if(req.body.id !== undefined && req.body.difficulty !== undefined){
            table.update_difficulty(req.body.id, req.body.difficulty);
            res.status(200).send("Add Success");
        } else{
            res.status(500).send("Body element undefined");
        } 
    } catch(err){
        console.error(err);
    }
});

router.put('/updateDate', (req, res) => {
    try {
        if(req.body.id !== undefined && req.body.due_date !== undefined){
            table.update_date(req.body.id, req.body.due_date);
            res.status(200).send("Add Success");
        } else{
            res.status(500).send("Body element undefined");
        } 
    } catch(err){
        console.error(err);
    }
});

router.delete('/delete/:id', (req,res) => {
    try{
        const id = parseInt(req.params['id']);
        table.delete(id);
        res.status(200).send("Delete Success");
    }catch(err){
        console.error("error in delete task with id");
    }
});

export default router;