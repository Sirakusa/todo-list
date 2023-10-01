module.exports = (app) => {
  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
