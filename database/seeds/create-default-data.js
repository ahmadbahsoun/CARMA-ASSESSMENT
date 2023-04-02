const bcrypt = require('bcrypt');

exports.seed = async function seed(knex) {
    const hashedCardNumber = await bcrypt.hash('4485275742308327', 5);
    const hashedCVV = await bcrypt.hash('377', 5);
  await knex('credit_cards').insert({
    name: 'CARMA',
    card_number: hashedCardNumber,
    expiration_date: '03/24',
    security_code: hashedCVV,
    created_at: new Date(),
    updated_at: new Date(),
  });
};
