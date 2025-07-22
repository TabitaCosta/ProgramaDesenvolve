// Importa o pacote crypto-js
const CryptoJS = require("crypto-js");

// Mensagem original e chave secreta
const mensagem = "Segredo importante!";
const chaveSecreta = "minha_senha_supersegura";

// Criptografar
const mensagemCriptografada = CryptoJS.AES.encrypt(mensagem, chaveSecreta).toString();
console.log("Mensagem Criptografada:", mensagemCriptografada);

// Descriptografar
const bytes = CryptoJS.AES.decrypt(mensagemCriptografada, chaveSecreta);
const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);
console.log("Mensagem Descriptografada:", mensagemDescriptografada);
