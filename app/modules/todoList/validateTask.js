const Joi = require('joi');

const schemaTask = Joi.object({
  title: Joi.string().empty('').max(10).trim(),
  description: Joi.string().empty('').max(250).trim(),
  date: Joi.date().greater('now'),
  statusTask: Joi.boolean(),
});

async function validateTask(task) {
  const newTask = await schemaTask.validateAsync(task);
  return newTask;
}

module.exports = validateTask;
