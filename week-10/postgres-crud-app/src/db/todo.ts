import { client } from "../index";
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const insertTodoQuery = `
        INSERT INTO todos (user_id, title, description, done)
        VALUES ($1, $2, $3, $4)
        RETURNING id, title, description, done;
      `;
    const values = [userId, title, description, false];

    const res = await client.query(insertTodoQuery, values);

    if (res.rows.length > 0) {
      const todo = res.rows[0];
      return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        done: todo.done,
      };
    } else {
      console.error("Failed to create todo.");
      return null;
    }
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export async function updateTodo(todoId: number) {
  try {
    const updateQuery = `
        UPDATE todos
        SET done = TRUE
        WHERE id = $1
        RETURNING id, title, description, done;
      `;
    const res = await client.query(updateQuery, [todoId]);

    if (res.rows.length > 0) {
      const updatedTodo = res.rows[0];
      return {
        id: updatedTodo.id,
        title: updatedTodo.title,
        description: updatedTodo.description,
        done: updatedTodo.done,
      };
    } else {
      console.log(
        `No todo found with ID ${todoId}, or it is already marked as done.`
      );
      return null;
    }
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}

export async function getTodo(todoId: number) {
  try {
    const queryText = `
    SELECT id, title, description, done
    FROM todos
    WHERE id = $1;
  `;
    const res = await client.query(queryText, [todoId]);
    if (res.rows.length > 0) {
      const todo = res.rows[0];
      return {
        todo,
      };
    } else {
      console.log(`No todo found with ID ${todoId}`);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving todo:", error);
    throw error;
  }
}
