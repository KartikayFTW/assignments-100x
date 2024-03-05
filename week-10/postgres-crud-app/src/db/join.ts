import { client } from "../index";

export async function getTodosWithUserDetails(userId: number) {
  try {
    const joinQuery = `
    SELECT todos.id, todos.title, todos.description, todos.done, users.name, users.username
    FROM todos
    INNER JOIN users ON todos.user_id = users.id
    WHERE users.id = $1;
`;
    const res = await client.query(joinQuery, [userId]);
    return res.rows;
  } catch (error) {
    console.error("Error getting todos with user details:", error);
    throw error;
  }
}
