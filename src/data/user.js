export const getUsers = async (req, res) => {
  const users = await users.findById("id");
  res.send(users);
} 

export default getUsers;