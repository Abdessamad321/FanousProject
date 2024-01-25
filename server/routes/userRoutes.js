const express = require("express");
const router = express.Router();

const { redirectToRole } = require("../middlewares/auth");
const userControllers = require("../controllers/userControllers");

router.route("/create").post(userControllers.createUser);

router.route("/login").post(userControllers.loginUser);

router.route("/list").get(userControllers.getAllUsers);


// A VOIR
// router.route("/search").get(userControllers.getUser);



//Merge into one route /search?keyword=value
// const user = await User.findOne({
//   $or: [
//     { email: keyword },
//     { name: keyword },
//   ],
// });
//Else 404 not found
// ==>
router.route("/search/mail/:email").get(userControllers.getUserByMail);

router.route("/search/name/:name").get(userControllers.getUserByName);
// <==

router
  .route("/:id")
  .get(userControllers.getUserById)
  .put(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
