const routerList = require('./modules/todoList/router');

module.exports = (app) => {
  app.use('/todo-list', routerList);

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
