import { client } from "../index";

export async function createTables() {
  // Users should create the tables manually as per the schema in README
  console.log(
    "Please create the tables manually using the SQL provided in the README.md."
  );
  try {
    await client.query(
      `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(223) NOT NULL UNIQUE,
        password VARCHAR(223) NOT NULL,
        name VARCHAR(223) NOT NULL
        );`
    );

    await client.query(
      `CREATE TABLE travel_plans (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(223) NOT NULL,
        destination_city VARCHAR(222) NOT NULL,
        destination_country VARCHAR(255) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        budget NUMERIC,
        FOREIGN KEY (user_id) REFERENCES users(id)
        ); `
    );
  } catch (e) {
    console.log("Error while creating tables: ", e);
  }
}

export async function dropTables() {
  // Users can manually drop tables as needed, or use a similar SQL query to drop them
  try {
    await client.query(`drop table if exists travel_plans;`);
    await client.query(`drop table if exists users;`);

    console.log("Please drop the tables manually if required.");
  } catch (e) {
    console.log("Error while dropping the table : ", e);
  }
}

module.exports = { createTables, dropTables };
