const Task = require("../models/Task.js");

const renderIndex = async (req, res) => {
    try {
        const tasks = await Task.find({}).lean();
        res.render("index.hbs", { tasks: tasks });
    } catch (error) {
        console.log("Error al listar las tarea:", error);
        res.status(500).send("Error al mostrar las tarea");
    }
  
};

const addTask = async (req, res) => {
    try {
        console.log(req.body)
        const task = Task(req.body);
        await task.save();
        res.redirect("/");
    } catch (error) {
        if (error.code === 11000) {
            const errorMessage = "El título de la tarea ya existe";
            res.redirect("/" + errorMessage);
          } else {
            console.log("Error al guardar la tarea:", error);
            res.status(500).send("Error al guardar la tarea");
          }
    }
  
};

const getIdTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render("edit", { tasks: task });
    } catch (error) {
        console.log("Error al obtener id de la tarea:", error);
        res.status(500).send("Error al editar la tarea");
    }
};

const editTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/");
    } catch (error) {
        console.log("Error al editar la tarea:", error);
        res.status(500).send("Error al editar la tarea");
    }

};

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log("Error al eliminar la tarea:", error);
        res.status(500).send("Error al eliminar la tarea");
    }
  
};

const deleteAllTasks = async (req, res) =>{
    try {
        await Task.deleteMany({})
    res.redirect('/')
    } catch (error) {
        console.log("Error al eliminar todas las tareas:", error);
        res.status(500).send("Error al eliminar todas las tareas");
    }
}

const toggleCompletedTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.completed = !task.completed;
        await task.save();
        res.redirect("/");
    } catch (error) {
        console.log("Error al cambiar el estado de la tarea:", error);
        res.status(500).send("Error al cambiar el estado de la tarea");
    }
  
};

const ErrorTasksExist = async (req, res) =>{
    const tasks = await Task.find({}).lean();
    res.render('index', {tasks: tasks,error: req.params.error})
}

module.exports = {
  renderIndex,
  addTask,
  getIdTask,
  editTask,
  deleteTask,
  deleteAllTasks,
  toggleCompletedTask,
  ErrorTasksExist
};
