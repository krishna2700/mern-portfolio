const router = require("express").Router();
const {
  intro,
  about,
  experience,
  projects,
  education,
  contact,
} = require("../models/portfolioModels");

// ? Get Portfolio Data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await intro.find();
    const abouts = await about.find();
    const experiences = await experience.find();
    const project = await projects.find();
    const educations = await education.find();
    const contacts = await contact.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experience: experiences,
      project: project,
      education: educations,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Update Portfolio Data Intro
router.post("/update-intro", async (req, res) => {
  try {
    const updatedIntro = await intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updatedIntro,
      success: true,
      message: "Intro Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Update Portfolio Data About
router.post("/update-about", async (req, res) => {
  try {
    const updateAbout = await about.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updateAbout,
      success: true,
      message: "About Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? add Portfolio Data Experience
router.post("/add-experience", async (req, res) => {
  try {
    const newExperience = await experience.create(req.body);
    res.status(200).send({
      data: newExperience,
      success: true,
      message: "New Experience Added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Update Portfolio Data Experience
router.post("/update-experience", async (req, res) => {
  try {
    const updateExperience = await experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updateExperience,
      success: true,
      message: "Experience Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Delete Portfolio Data Experience
router.post("/delete-experience", async (req, res) => {
  try {
    const deleteExperience = await experience.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deleteExperience,
      success: true,
      message: "Experience Data Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? add Portfolio Data Projects
router.post("/add-projects", async (req, res) => {
  try {
    const newProjects = await projects.create(req.body);
    res.status(200).send({
      data: newProjects,
      success: true,
      message: "New Projects Added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Update Portfolio Data Projects
router.post("/update-projects", async (req, res) => {
  try {
    const updateProjects = await projects.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updateProjects,
      success: true,
      message: "Projects Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Delete Portfolio Data Projects
router.post("/delete-projects", async (req, res) => {
  try {
    const deleteProjects = await projects.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deleteProjects,
      success: true,
      message: "Projects Data Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? add Portfolio Data Education
router.post("/add-education", async (req, res) => {
  try {
    const newEducation = await education.create(req.body);
    res.status(200).send({
      data: newEducation,
      success: true,
      message: "New Education Added Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Update Portfolio Data Education
router.post("/update-education", async (req, res) => {
  try {
    const updateEducation = await education.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updateEducation,
      success: true,
      message: "Education Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? Delete Portfolio Data Education
router.post("/delete-education", async (req, res) => {
  try {
    const deleteEducation = await education.findOneAndDelete({
      _id: req.body._id,
    });
    res.status(200).send({
      data: deleteEducation,
      success: true,
      message: "Education Data Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ? update Portfolio Data contact
router.post("/update-contact", async (req, res) => {
  try {
    const updateContact = await contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: updateContact,
      success: true,
      message: "Contact Data Updated Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
