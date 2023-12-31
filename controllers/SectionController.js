const { Section } = require('../models/index');

//Create Section
const SectionController = {
  async create(req, res) {
    try {
      const section = await Section.create({ ...req.body });
      res.status(201).send({ message: 'Section added...', section });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'We had an issue creating the section...',
      });
    }
  },

  //Gets all sections
  async getAllSections(req, res) {
    try {
      const sections = await Section.findAll();
      res.status(201).send({ message: 'Search completed...', sections });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: 'We had an issue searching the section...' });
    }
  },
};

module.exports = SectionController;
