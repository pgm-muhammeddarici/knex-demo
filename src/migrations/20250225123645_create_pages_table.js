const tableName = "pages_table";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("slug").notNullable();
        table.string("content").notNullable();
        table.boolean("is_homepage").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}