const { Router } = require('express');

const routerList = Router({ mergeParams: true });

routerList.get('/', readTask);
routerList.get('/', TaskById);
routerList.post('/', createTask);
routerList.patch('/', updateTask);

module.exports = routerList;
