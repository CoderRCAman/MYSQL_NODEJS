const router = require("express").Router();
const { where } = require("sequelize");
const { sequelize } = require("../connections/database_connection");
const { User } = require("../models/User");
router.route("/create").post(async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({
      name: name,
      email: email,
    });
    if (newUser) {
      return res.status(201).json({
        status: "Created a fucking user!",
        user: newUser,
      });
    } else
      return res.status(401).json({
        msg: "User was not saved in database!",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error!",
    });
  }
});

router.route("/update").patch(async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await User.update(
      {
        name: name,
      },
      {
        where: {
          email: email,
        },
      }
    );
    console.log(updatedUser);
    if (updatedUser[0]) {
      return res.status(200).json({
        status: "Update a fucking user!",
        user: updatedUser,
      });
    } else
      return res.status(401).json({
        msg: "User was not updated gandu!",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error!",
    });
  }
});

router.route("/destroy").delete(async (req, res) => {
  try {
    const { email } = req.body;
    const deleteUser = await User.destroy({
      where: {
        email: email,
      },
    });
    if (deleteUser) {
      return res.status(200).json({
        status: "Delete a fucking user!",
        user: deleteUser,
      });
    } else
      return res.status(401).json({
        msg: "User was not delete gandu!",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error!",
    });
  }
});

router.route("/find").get(async (req, res) => {
  const { name } = req.body;

  try {
    const [result, metdata] = await sequelize.query(
      `SELECT * FROM Users WHERE name REGEXP '${name}?'`
    );
    console.log(result, metdata);
    return res.status(200).json({
      status: "Resuls found bitch!",
      user: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal server error!",
    });
  }
});

module.exports = router;
