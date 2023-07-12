// create your reviews router file Here:

// Path: src\reviews\reviews.router.js

const router = require("express").Router({ mergeParams: true });
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
.route('/')
.get(controller.list)

router
    .route("/:reviewId")
    .delete(controller.destroy)
    .put(controller.update)
    .all(methodNotAllowed);

module.exports = router;
