import { Client } from "pg";
import { DB_URL } from "./config";
import { createTables } from "./db/setup";
import { createUser, deleteUser, getUser, updateUser } from "./db/user";
import { createTodo, getTodo, updateTodo } from "./db/todo";
import { getTodosWithUserDetails } from "./db/join";

export const client = new Client({
  connectionString: DB_URL,
});

async function main() {
  await client.connect();
  //   await createTables();
  //   await createUser("yyy@gg.com", "123456", "bob Altman");
  //   await createTodo(1, "Todo 2", "Todo 2 description");
  //   console.log(await getUser(1));
  //   console.log(await getTodo(1));
  //   console.log(await updateTodo(1));
  //   console.log(await updateUser(1, "Sam Bilings"));
  //   console.log(await deleteUser(3));
  console.log(await getTodosWithUserDetails(1));
  await client.end();
}

main().catch(console.error);
