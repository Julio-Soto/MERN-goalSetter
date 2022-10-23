const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @Route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
        res.status(200).json({message: 'Get Goals'})
})

// @desc Set Goal
// @Route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field to your request.') 
    }
    res.status(200).json({message: 'Set Goal'})
})

// @desc Update Goal
// @Route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
})

// @desc Delete Goal
// @Route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}