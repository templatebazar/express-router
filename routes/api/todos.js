const express = require("express");
const router = express.Router();

// @route     GET api/todos
// @desc      get all todos
// @access    Public

router.get("/", (req, res) => {
  res.send("get request");
});

// @route     POST api/todos
// @desc      add a todo
// @access    Public

router.post("/", (req, res) => {
  res.send("post request");
});

// @route     PUT api/todos/:id
// @desc      update a todo
// @access    Public

router.put("/:id", (req, res) => {
  res.send("put request");
});

// @route     DELETE api/todos/:id
// @desc      Regiter a user
// @access    Public

router.delete("/:id", (req, res) => {
  res.send("delete request");
});

module.exports = router;
