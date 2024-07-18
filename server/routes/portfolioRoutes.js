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

module.exports = router;
