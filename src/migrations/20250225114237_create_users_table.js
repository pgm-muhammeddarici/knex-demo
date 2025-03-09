const tableName = "users_table";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("bio").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}
