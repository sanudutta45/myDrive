const express = require("express")
const { validate } = require("express-validation")

const controller = require("../../controllers/folder.controller")

const reqAuth = require("../../middlewares/reqAuth")

const { vOptions } = require("../../validations/auth.validation")

const {
  addfolderSchema,
  renamefolderSchema,
  deletefolderSchema,
} = require("../../validations/folder.validation")

const router = express.Router()

router
  .route("/")
  .post(
    reqAuth.authorize,
    validate(addfolderSchema, vOptions),
    controller.addFolder
  )
  .get(reqAuth.authorize, controller.getFolderInfo)

router.route("/children").get(reqAuth.authorize, controller.getChildren)

router
  .route("/rename/:folderId")
  .put(
    reqAuth.authorize,
    validate(renamefolderSchema, vOptions),
    controller.rename
  )

router
  .route("/delete/:folderId")
  .put(
    reqAuth.authorize,
    validate(deletefolderSchema, vOptions),
    controller.delete
  )

module.exports = router
