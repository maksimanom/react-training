import React, { useState } from "react";
import { TextField, CircularProgress } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStyles } from "./styles";

import {
  getUsers,
  editUser,
  deleteUser,
} from "../../services/userTableService";
import useTable from "./useTable_";
import { Pagination } from "../pagination";
import Portal from "../portal";
import { EditUserWindow } from "../editUser";

const Table = () => {
  const classes = useStyles();
  const [usersArray, setUsersArray] = useState([]);
  const [userDataChangeInput, setUserDataChangeInput] = useState({});
  getUsers().then(setUsersArray);

  const {
    result,
    setFilter,
    setSort,
    setCurrentPage,
    currentPage,
    itemsPerPage,
    countOfPages,
    filter,
  } = useTable(usersArray);

  const headerData = [
    { label: "Name", propType: "string", propName: "name" },
    { label: "Surname", propType: "string", propName: "surname" },
    { label: "Age", propType: "number", propName: "age" },
    { label: "Currently working", propType: "boolean", propName: "working" },
  ];
  const [isReversedSort, setIsReversedSort] = useState(false);
  const [modalSettings, setModalSettings] = useState({
    left: 0,
    top: 0,
    showed: false,
    editingUser: false,
    user: {},
  });

  const handleSearchChange = ({ target: { value } }) => setFilter(value);
  const handleSort = (name, type) => {
    setIsReversedSort(!isReversedSort);
    setSort(name, type, isReversedSort);
  };
  const handleChangePage = (toPage) => {
    setCurrentPage(toPage);
    setModalSettings((prev) => ({ ...prev, showed: false }));
  };

  const handleOpenUserWindow = (e, user) => {
    setModalSettings({
      left: e.clientX,
      top: e.clientY,
      showed: true,
      user: user,
    });
  };

  const handleCloseModal = () => {
    setModalSettings((prev) => ({
      ...prev,
      showed: false,
      user: {},
      editingUser: false,
    }));
  };

  const handleOpenEditUser = () => {
    setModalSettings((prev) => ({ ...prev, editingUser: true }));
  };
  const handleEditUserData = (field, value) => {
    setUserDataChangeInput((prev) => ({ ...prev, [field]: value }));
  };
  const handleChangeUserDataClick = () => {
    const newUser = {
      id: modalSettings.user.id,
      name: userDataChangeInput.name,
      surname: userDataChangeInput.surname,
    };
    editUser(newUser);
    handleCloseModal();
  };

  const handleDeleteUser = (user) => {
    deleteUser(user);
    setModalSettings({ showed: false });
  };

  const Highlight = ({ toFound, prop }) => {
    const regExp = new RegExp(toFound, "gi");
    if (regExp.test(prop)) {
      prop = prop.replace(regExp, "<span style='background: yellow'>$&</span>");
    }
    return <div dangerouslySetInnerHTML={{ __html: prop }}></div>;
  };

  return (
    <>
      {usersArray?.length ? (
        <>
          <table className={classes.root}>
            <thead>
              <tr>
                <td colSpan={headerData.length / 2}>
                  <TextField
                    fullWidth
                    onChange={(e) => handleSearchChange(e)}
                  />
                </td>
                <td colSpan={headerData.length / 2}>
                  <Pagination
                    countOfPages={countOfPages}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    handleChangePage={handleChangePage}
                  />
                </td>
              </tr>
              <tr>
                {headerData.map((item, index) => (
                  <td
                    key={index}
                    onClick={() => handleSort(item.propName, item.propType)}
                  >
                    {item.label}
                  </td>
                ))}
                <td className={classes.editColumn}>
                  <EditIcon />
                </td>
              </tr>
            </thead>
            <tbody>
              {result.length ? (
                result.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Highlight toFound={filter} prop={item.name} />
                      </td>
                      <td>
                        <Highlight toFound={filter} prop={item.surname} />
                      </td>
                      <td>{item.age}</td>
                      <td>{item.working ? "yes" : "no"}</td>
                      <td>
                        <MoreHorizIcon
                          className={classes.editIcon}
                          onClick={(e) => handleOpenUserWindow(e, item)}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5}>NO USER PRESENT IN TABLE</td>
                </tr>
              )}
            </tbody>
          </table>
          {modalSettings.showed ? (
            <Portal>
              <div
                className={classes.portalModal}
                style={{ left: modalSettings.left, top: modalSettings.top }}
              >
                {modalSettings.editingUser ? (
                  <EditUserWindow
                    user={modalSettings.user}
                    handleEditUserData={handleEditUserData}
                    handleChangeUserDataClick={handleChangeUserDataClick}
                  />
                ) : (
                  <>
                    <button onClick={() => handleOpenEditUser()}>Edit</button>
                    <button
                      onClick={() => handleDeleteUser(modalSettings.user)}
                    >
                      Delete
                    </button>
                    <button onClick={handleCloseModal}>X</button>
                  </>
                )}
              </div>
            </Portal>
          ) : null}
        </>
      ) : (
        <div>
          Waiting a response from a server
          <CircularProgress />
        </div>
      )}
    </>
  );
};
export default Table;
