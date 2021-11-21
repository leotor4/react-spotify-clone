
//Retorna todo os usuários cadastrados
const getAllUSers = (req, res, next) => {
    res.json({message: "Todos os usuários"})
}

//Retorna um usuário cadastrado por ID
const getUserById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Atualiza um usuário cadastro por ID
const updateUserById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}

//Deleta um usuário cadastrado por ID
const deleteUserById = (req, res, next) => {
    res.json({message: "Usuário por ID."})
}


//Cria um usuário
const newUser = (req, res, next) => {
    res.json({message: "POST new tea"});
};

module.exports = {newUser, deleteUserById, getAllUSers, getUserById, updateUserById}