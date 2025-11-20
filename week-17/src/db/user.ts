import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    const result = await client.query(
      `insert into users(username,password,name) values($1,$2,$3) returning *;`,
      [username, password, name]
    );
    console.log("this is result of insert users query  ", result.rows[0]);
    return result.rows[0];
  } catch (e) {
    console.log("Error while creating the user : ", e);
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    const result = await client.query(`select * from users where id = $1 ;`, [
      userId,
    ]);
    console.log("this is result of get users  query ", result.rows[0]);
    return result.rows[0];
  } catch (e) {
    console.log("Error while getting user details : ", e);
  }
}
