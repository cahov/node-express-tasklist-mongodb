const express = require("express");
const {
  renderIndex,
  addTask,
  getIdTask,
  editTask,
  deleteTask,
  toggleCompletedTask,
  deleteAllTasks,
  ErrorTasksExist,
} = require("../controllers/taskController.js");
const router = express.Router();

router.get("/", renderIndex);
router.get("/:error", ErrorTasksExist)
router.post("/tasks/add", addTask);

router.get("/edit/:id", getIdTask);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);
router.get("/deleteall", deleteAllTasks);

router.get("/toggle/:id", toggleCompletedTask);

module.exports = router;
