"use strict";
// Usando os tipos utilitários, substitua a implementação dos tipos usados pelas funções derivando do tipo User
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserName = exports.updateUser = exports.createUser = void 0;
function createUser(user) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}
exports.createUser = createUser;
function updateUser(user) {
    // .... nada a fazer aqui, só exemplificando um caso de uso
}
exports.updateUser = updateUser;
function getUserName(user) {
    return user.name;
}
exports.getUserName = getUserName;
