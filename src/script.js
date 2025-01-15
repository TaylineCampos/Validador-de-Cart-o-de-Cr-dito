// Função para obter a bandeira do cartão com base no número do cartão
function getCardFlag(cardNumber) {
    // Padrões de regex para diferentes bandeiras de cartão
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        Amex: /^3[47][0-9]{13}$/,
        Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
        Voyager: /^8699[0-9]{11}$/,
        Hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        Aura: /^50[0-9]{14,17}$/,
        Enroute: /^(2014|2149)\d{11}$/
    };

    // Itera sobre os padrões de cartão para encontrar uma correspondência
    for (const flag in cardPatterns) {
        if (cardPatterns[flag].test(cardNumber)) {
            // Retorna a bandeira do cartão correspondente
            return flag;
        }
    }

    // Retorna 'unknown' se nenhuma correspondência for encontrada
    return 'Invalida';
}

// Função para validar o número do cartão e exibir a bandeira
function validateCard() {
    let cardNumber = document.getElementById('cardNumber').value;
    cardNumber = cardNumber.replace(/\s+/g, ''); // Remove espaços em branco
    const cardFlag = getCardFlag(cardNumber);
    document.getElementById('result').innerText = `Bandeira: ${cardFlag}`;
}