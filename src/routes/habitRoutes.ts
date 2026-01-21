import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message:'List of habits'});
})

router.get('/:id', (req, res) => {
    res.status(200).json({message:`Details of habit ${req.params.id}`});
})

router.post('/', (req, res) => {
    res.status(201).json({message:'Habit created'});
})

router.put('/:id', (req, res) => {
    res.status(200).json({message:`Habit ${req.params.id} updated`});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:`Habit ${req.params.id} deleted`});
})

export default router;