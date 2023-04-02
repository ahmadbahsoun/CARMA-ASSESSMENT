exports.up = async function up(knex) {
    await knex.schema.createTable('credit_cards', table => {
      table
        .increments('id')
        .unsigned()
        .notNullable()
        .primary(['user_job_pkey']);
      table.string('name', 60).nullable();
      table.string('card_number', 255).nullable();
      table.string('expiration_date', 60).nullable();
      table.string('security_code', 255).nullable();
      table
        .timestamp('created_at')
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .timestamp('updated_at')
        .notNullable()
        .defaultTo(knex.fn.now());
    });
  };
  
  exports.down = async function down(knex) {
    await knex.schema.dropTable('credit_cards');
  };
  