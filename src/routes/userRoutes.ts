import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({message:'List of users'});
})

router.get('/:id', (req, res) => {
    res.status(200).json({message:`Details of user ${req.params.id}`});
})

router.put('/:id', (req, res) => {
    res.status(200).json({message:`User ${req.params.id} updated`});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:`User ${req.params.id} deleted`});
})

export default router;