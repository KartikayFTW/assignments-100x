import { client } from "../index";

export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    const insertUserQuery = `INSERT INTO USERS(username,password,name) VALUES($1,$2,$3) RETURNING id`;
    const insertUserValue = [username, password, name];
    const res = await client.query(insertUserQuery, insertUserValue);

    console.log("User created with ID:", res.rows[0].id);
    return res.rows[0].id;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUser(userId: number) {
  try {
    const getUserQuery = `SELECT username, password, name FROM users WHERE id = $1;`;
    const res = await client.query(getUserQuery, [userId]);

    if (res.rows.length > 0) {
      const user = res.rows[0];
      return {
        username: user.username,

        name: user.name,
      };
    } else {
      console.log(`No user found with ID ${userId}`);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
}

export async function updateUser(userId: number, newName: string) {
  try {
    const updateQuery = `
        UPDATE users
        SET name = $2
        WHERE id = $1
        RETURNING id, username, name;
      `;
    const values = [userId, newName];

    const res = await client.query(updateQuery, values);

    if (res.rows.length > 0) {
      const updatedUser = res.rows[0];
      return {
        id: updatedUser.id,
        username: updatedUser.username,
        name: updatedUser.name,
      };
    } else {
      console.log(`No user found with ID ${userId} or no update needed.`);
      return null;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(userId: number) {
  try {
    const deleteQuery = "DELETE FROM users WHERE id = $1;";
    const res = await client.query(deleteQuery, [userId]);

    // Check how many rows were affected
    if (res.rowCount && res.rowCount > 0) {
      console.log(`User with ID ${userId} deleted successfully.`);
      return {
        success: true,
        message: `User with ID ${userId} has been successfully deleted.`,
      };
    } else {
      console.log(`No user found with ID ${userId}.`);
      return { success: false, message: `No user found with ID ${userId}.` };
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
