import knexConfig from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knexConfig);

class Pages extends Model {
    static get tableName() {
        return "pages_table";
    }
    static get idColumn() {
        return "id";
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["id", "title", "slug", "content", "is_homepage"],
            properties: {
                id: { type: "integer" },
                title: { type: "string", minLength: 1, maxLength: 255 },
                slug: { type: "string", minLength: 1, maxLength: 255 },
                content: { type: "string", minLength: 1, maxLength: 255 },
                is_homepage: { type: "boolean", minLength: 1, maxLength: 255 },
            },
        };
    }
}

export default Pages;