// Base credit card instance with some defaults.
const baseCreditCard = {
    company: 'VISA',
    number: '1234 5678 9012',
    expiryMonth: 12,
    expiryYear: 2030,
    customerName: 'John Wick',

    getCredit() {
        //
    },

    generateStatement() {
        //
    },

    getStatement() {
        //
    },

    applyOverdueCharges() {
        //
    },

    applyInterest() {
        //
    }
};

const customerCreditCard = Object.create(baseCreditCard);

console.log('Before customerCreditCard', customerCreditCard);

customerCreditCard.company = 'Mastercard';
customerCreditCard.number = '1111 2222 3333';
customerCreditCard.customerName = 'Peter Parker';

customerCreditCard.addRewards = function() {
    console.log('Add rewards...');
}
customerCreditCard.redeemRewards = function() {
    console.log('Redeem rewards...');
}

console.log('After customerCreditCard', customerCreditCard);
