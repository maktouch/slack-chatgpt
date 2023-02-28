import { knex as Knex } from "knex";
import * as config from "../config";

export const db = Knex({
  client: "mysql2",
  connection: {
    ...config.mysql,
    charset: "utf8mb4",
    ssl: {
      rejectUnauthorized: true,
    },
  },
});
