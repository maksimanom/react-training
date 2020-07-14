import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    selected: {
        background: "#3b3b3b",
        color: "#ffffff"
    }
}));

export const Pagination = ({ countOfPages, currentPage, itemsPerPage, handleChangePage }) => {
    const classes = useStyles();
    const arrayOfPages = new Array(countOfPages).fill(null).map((_, index) => index);
    return (
        <>
            {
                arrayOfPages.map((number) => {
                    return <button className={currentPage === number ? classes.selected : null} key={number} onClick={() => handleChangePage(number)}>{number + 1}</button>
                })
            }
        </>
    )
}