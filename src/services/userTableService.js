import usersArray from "../utils/constants.json";

export const getUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(usersArray);
    }, 1500);
  });
};

export const editUser = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 1500);
  });
};

export const deleteUser = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 1500);
  });
};
