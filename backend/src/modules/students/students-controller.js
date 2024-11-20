const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    try {
        const result = await getAllStudents();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { name, email, className, section, roll } = req.body;
    const payload = { name, email, className, section, roll };
    try {
        const result = await addNewStudent(payload);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id, name, email, className, section, roll } = req.body;
    const payload = { id, name, email, className, section, roll };
    try {
        const result = await updateStudent(payload);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getStudentDetail(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { userId, reviewerId, status } = req.body;
    try {
        const result = await setStudentStatus({ userId, reviewerId, status });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
