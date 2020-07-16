import usersArrayFromFile from "../utils/constants.json";

let usersArray = usersArrayFromFile;

export const getUsers = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // const action = Math.random() > .5 ? res : rej;
      res(usersArray);
    }, 500);
  });
};

export const editUser = (user) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const userIndex = usersArray.findIndex(
        (userInArray) => userInArray.id === user.id
      );
      const newArray = [...usersArray];
      newArray[userIndex] = user;
      usersArray = newArray;
    }, 100);
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
