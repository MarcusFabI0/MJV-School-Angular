"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
exports.handlers = {
    click: (target) => { },
    scroll: (distance) => { },
};
// Melhore a tipagem dessa função para que limite o parametro 
// somente para os tipos de handlers disponíveis e que o retorno do handler 
// corresponda ao tipo que foi passado
// Remove também o cast forçado que atualmente está evitando o erro de compilação
function getHandler(handlerType) {
    return exports.handlers[handlerType];
}
