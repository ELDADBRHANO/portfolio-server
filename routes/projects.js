const {
  getAllProjects,
  getProjectsById,
  createNewProjects,
  update,
  deleteProject,
} = require("../controllers/projects");

const router = require("express").Router();

router.get("/getProjects", getAllProjects);
router.get("/getById/:id", getProjectsById);
router.post("/create/", createNewProjects);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteProject);
module.exports = router;