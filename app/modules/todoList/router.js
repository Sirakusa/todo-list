const { Router } = require('express');

const {
  createTask,
  readAll,
  updateTask,
  findTaskById,
  deleteById,
} = require('./controller');

const routerList = Router({ mergeParams: true });

routerList.get('/', readAll); //
routerList.get('/:id', findTaskById);
routerList.post('/', createTask); //
routerList.patch('/:id', updateTask); //
routerList.delete('/:id', deleteById);

module.exports = routerList;
