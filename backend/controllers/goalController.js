const asyncHandler = require('express-async-handler');

// $desc     Get all goals
// $route    GET /api/goals
// $access   Private
const getGoals = asynchHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' });
})

// $desc     Set single goal
// $route    POST /api/goals/:id
// $access   Private
const setGoal = asynchHandler(async (req, res) => {
    //console.log(req.body); //To use body data, you have to add middleware in server.js.

    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({ message: 'SET Goals' });
})

// $desc     Update single goal
// $route    PUT /api/goals/:id
// $access   Private
const updateGoal = asynchHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}` });
})

// $desc     Delete goal
// $route    DELETE /api/goals/:id
// $access   Private
const deleteGoal = asynchHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` });
})


module.exports = {
    getGoals,
    setGoal, 
    updateGoal,
    deleteGoal
}