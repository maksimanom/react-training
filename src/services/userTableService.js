import usersArrayFromFile from "../utils/constants.json";

let usersArray = usersArrayFromFile;

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
      console.log(user);
    }, 1500);
  });
};

export const deleteUser = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newArray = usersArray.filter(
        (userInArray) => userInArray.id !== user.id
      );
      usersArray = newArray;
    }, 500);
  });
};
