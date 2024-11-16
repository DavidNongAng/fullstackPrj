const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// $desc     Get all goals
// $route    GET /api/goals
// $access   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
})

// $desc     Set single goal
// $route    POST /api/goals/:id
// $access   Private
const setGoal = asyncHandler(async (req, res) => {
    //console.log(req.body); //To use body data, you have to add middleware in server.js.

    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal);
})

// $desc     Update single goal
// $route    PUT /api/goals/:id
// $access   Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal);
})

// $desc     Delete goal
// $route    DELETE /api/goals/:id
// $access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    
    await Goal.findByIdAndDelete(req.params.id);
    //await goal.remove() //Another way to delete a goal.

    res.status(200).json({ id: req.params.id });
})


module.exports = {
    getGoals,
    setGoal, 
    updateGoal,
    deleteGoal
}