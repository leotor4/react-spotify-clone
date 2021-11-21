var express = require('express');
var router = express.Router();
var userController = require('../../controller/user-controller')

//Retorna todos os usuários cadastrados.
router.get("/", userController.getAllUSers)

//Retorna um usuário cadastrado por ID.
router.get("/:id", userController.getUserById)

//Cadastra um novo usuário
router.post("/", userController.newUser)

//Atualiza um usuário cadastrador por ID
router.put("/:id", userController.updateUserById)

//Deleta um usuário existente por ID
router.delete("/:id", userController.deleteUserById)

module.exports = router

