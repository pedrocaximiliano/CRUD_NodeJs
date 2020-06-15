import Knex from 'knex';

export async function up(knex: Knex) {
    // criar categoria
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary();
        table.string('code').notNullable();
        table.string('description').notNullable();
    });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('categories');
}
