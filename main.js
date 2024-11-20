// Este arquivo tem algumas referencias de casos de uso de Regex
// This file has Regex some use cases references



/**
 * Este valida o Padrao de um CEP, sendo o - opcional ou nao, por exemplo: 12345678 ou 12345678
 * @param {string} cep CEP a ser verificado pela expressao regular
 * @return {boolean} Se for um formato valido = true
 */
function validateCEP(cep) {
    const regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep);
}

/**
 * Este metodo remove os tudo o que nao for digito de um cpf, imposto por um regex,
 * o que nao for digito sera trocado por uma string vazia
 * @param {string} cpf CPF a ser verificado e digitos removidos, se necessario
 * @return {string} o CPF validado e sem digitos.
 */
function removeNonDigits(cpf) {
    const regex = /\D/g;
    return cpf.replace(regex, "");
}

/**
 * Este metodo valida se um dominio termina com .br
 * @param {string} domain dominio a ser verificado
 * @return {boolean} se for um dominio valido = true
 */
function validateBrDomain(domain) {
    const regex = /\.br$/;
    return regex.test(domain);
}

// Encontrar emails em um texto

function findEmails(text) {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const result = text.match(regex);
    if (result) {
        return result;
    }
    return [];
}

const textWithEmails =
    "Para mais informacoes, contate-nos em contato@exemplo.com ou suporte@exemplo.com.br";

const emails = findEmails(textWithEmails);

if (emails.length > 0) {
    console.log("Emails Encontrados: ");
    for (let i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }
} else {
    console.log("Nenhum email encontrado");
}
