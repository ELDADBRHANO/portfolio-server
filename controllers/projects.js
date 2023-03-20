const ProjectsModel = require("../models/projects");
const { getAll, getById, create, updateOne, deleteOne } = require("./main");

const getAllProjects = async (req, res) => {
  await ProjectsModel.find({})
    .then((data) => {
      data.length == 0
        ? res.status(300).json({ success: false, message: "no data found" })
        : res.status(200).json({ success: true, data });
    })
    .catch((err) => res.status(400).json({ success: false, err }));
};

const getProjectsById = (req, res) => {
  getById(req, res, ProjectsModel);
};
const createNewProjects = (req, res) => {
  create(req, res, ProjectsModel);
};
const update = (req, res) => {
  updateOne(req, res, ProjectsModel);
};
const deleteProject = (req, res) => {
  deleteOne(req, res, ProjectsModel);
};

module.exports = {
  getAllProjects,
  getProjectsById,
  createNewProjects,
  update,
  deleteProject,
};
