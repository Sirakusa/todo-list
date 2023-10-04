const { Router } = require('express');

const {
  allPending,
  findById,
  createTask,
  updateTask,
  readAll,
} = require('./controller');

const routerList = Router({ mergeParams: true });

routerList.get('/', allPending); //
routerList.get('/', findById);
routerList.post('/', createTask); //
routerList.patch('/', updateTask); //
routerList.get('/', readAll); //

module.exports = routerList;
