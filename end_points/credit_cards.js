const express = require('express');
const router = express.Router();
const knex = require('../database');
const bcrypt = require('bcrypt');


// POST endpoint for creating a new credit card record
router.post('/', async (req, res) => {
    const { name, cardNumber, expirationDate, securityCode } = req.body;

    const encryptedCardNumber = await bcrypt.hash(cardNumber, 5);
    const encryptedSecurityCode = await bcrypt.hash(expirationDate, 5);
    
  // Insert new credit card record into database
    try {
        const newCreditCard = await knex('credit_cards').insert({
            name,
            card_number: encryptedCardNumber,
            expiration_date: expirationDate,
            security_code: encryptedSecurityCode,
        });

        res.status(201).json({
            message: 'New credit card record created successfully',
            creditCard: newCreditCard
        });
    } catch (error) {
            console.error(error);
            res.status(500).json({
            message: 'An error occurred while creating the credit card record',
            error: error.message
        });
    }
});

module.exports = router;