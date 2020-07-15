import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, CircularProgress } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import {
  getUsers,
  editUser,
  deleteUser,
} from "../../services/userTableService";
import useTable from "./useTable_";
import { Pagination } from "../pagination";
import Portal from "../portal";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 20,
    textAlign: "center",
    borderCollapse: "collapse",
    "& thead, tfoot": {
      color: "red",
    },
    "& tbody tr": {
      borderBottom: "1px dotted black",
      borderCollapse: "collapse",
    },
  },
  editColumn: {
    paddingLeft: 50,
  },
  editIcon: {
    cursor: "pointer",
  },
  portalModal: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#FF7355",
    textAlign: "center",
    zIndex: 1200,
    position: "fixed",
  },
}));

const Table = () => {
  const classes = useStyles();
  const [usersArray, setUsersArray] = useState([]);
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
    userIndex: -1,
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

  const handleOpenUserWindow = (e, index) => {
    setModalSettings({
      left: e.clientX,
      top: e.clientY,
      showed: true,
      userIndex: index,
    });
  };

  const handleCloseModal = () => {
    setModalSettings((prev) => ({ ...prev, showed: false }));
  };

  const handleDeleteUser = () => {
    const firstArrayPart = usersArray.slice(0, modalSettings.userIndex);
    const secondArrayPart = usersArray.slice(
      modalSettings.userIndex + 1,
      usersArray.length
    );
    setUsersArray(firstArrayPart.concat(secondArrayPart));
    setModalSettings((prev) => ({ ...prev, showed: false }));
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
              {result.map((item, index) => {
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
                        onClick={(e) =>
                          handleOpenUserWindow(
                            e,
                            itemsPerPage * currentPage + index
                          )
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {modalSettings.showed ? (
            <Portal>
              <div
                className={classes.portalModal}
                style={{ left: modalSettings.left, top: modalSettings.top }}
              >
                <button>Change</button>
                <button onClick={() => handleDeleteUser()}>Delete</button>
                <button onClick={handleCloseModal}>X</button>
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
