// @desc Get Goals
// @Route GET /api/goals
// @access Private

const getGoals = (req,res) => {
        res.status(200).json({message: 'Get Goals'})
}

// @desc Set Goal
// @Route POST /api/goals
// @access Private

const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goal'})
}

// @desc Update Goal
// @Route PUT /api/goals
// @access Private

const updateGoal = (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

// @desc Delete Goal
// @Route DELETE /api/goals
// @access Private

const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}