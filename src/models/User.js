import knexConfig from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knexConfig);

class User extends Model {
    static get tableName() {
        return "users_table";
    }
    static get idColumn() {
        return "id";
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["id", "first_name", "last_name", "bio"],
            properties: {
                id: { type: "integer" },
                first_name: { type: "string", minLength: 1, maxLength: 255 },
                last_name: { type: "string", minLength: 1, maxLength: 255 },
                bio: { type: "string", minLength: 1, maxLength: 255 },
            },
        };
    }
}

export default User;