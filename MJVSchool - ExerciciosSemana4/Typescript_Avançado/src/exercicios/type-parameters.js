"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProperty = void 0;
// Coloque os três argumentos de tipo na função e use-os para tipar cada um dos argumentos. 
// O primeiro tipo deve ser o tipo do objeto a ser editado
// o segundo tipo deve ser uma das propriedades do tipo do objeto
// o terceiro tipo deve ser o tipo de valor que essa propriedade do objeto aceita
function editProperty(obj, property, value) {
    obj[property] = value;
}
exports.editProperty = editProperty;
editProperty({ nome: "alan" }, "nome", "a");
