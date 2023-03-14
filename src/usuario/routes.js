const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:username", controller.getUserByUsername);
router.delete("/:username", controller.removeUser);

module.exports = router;