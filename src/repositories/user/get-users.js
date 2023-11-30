import { getUsersFromDB } from '../../clients/user';

const validateUsers = (users) => {
  return users.filter((user) => user.age > 18);
};

export const getUsers = () => {
  const users = getUsersFromDB();
  const validUers = validateUsers(users);

  if (validUers.length > 0) return validUers;

  return null;
};
