// const validateTask = require('./validateTask');
require('./connection');

const Task = require('./repository');
const validateTask = require('./validateTask');

async function createTask(req, res) {
  try {
    const validatedData = await validateTask(req.body);
    const task = new Task(validatedData);
    await task.save();
    res.send(task);
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
  try {
    const { id } = req.params;

    const data = await validateTask(req.body);

    const findTask = await Task.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.send(findTask);
  } catch (error) {
    res.send(error);
  }
}

async function findTaskById(req, res) {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    res.send(task);
  } catch (err) {
    res.send(err);
  }
}

async function deleteById(req, res) {
  const { id } = req.params;

  try {
    const deleteDocument = await Task.deleteOne({ _id: id });
    res.send(deleteDocument);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  createTask,
  readAll,
  updateTask,
  findTaskById,
  deleteById,
};
