// const validateTask = require('./validateTask');
require('../../connection');

const Task = require('./repository');
const validateTask = require('./validateTask');

async function createTask(req, res) {
  const task = new Task(req.body);

  try {
    validateTask(task);
    const saveTask = await task.save();
    res.send(saveTask);
  } catch (err) {
    res.send(err);
  }
}

async function readAll(req, res) {
  try {
    const tasks = await Task.find({ statusTask: false });
    res.send(tasks);
  } catch (err) {
    res.sendStatus(400);
  }
}

async function updateTask(req, res) {
  const filter = req.params.id;
  const Data = req.body.update;

  try {
    const newDocument = await Task.findOneAndUpdate(filter, Data, {
      new: true,
    });
    res.send(newDocument);
  } catch (err) {
    res.send(err);
  }
}

async function findTaskById(req, res) {
  const taskId = req.params.id;
  
  try {
    const task = await Task.findById(taskId).exec();
    if (task) {
      res.send(task);
    } else {
      res.send('not found');
    }
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  createTask,
  readAll,
  updateTask,
  findTaskById,
};
