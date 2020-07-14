import React from "react";

const TablePortal = ({ handleCloseModal, handleCloseModal, handleDeleteUser }) => {

    return (
        modalSettings.showed ? <Portal>
            <div className={classes.portalModal} style={{ left: modalSettings.left, top: modalSettings.top }}>
                <button>Change</button>
                <button onClick={() => handleDeleteUser()}>Delete</button>
                <button onClick={handleCloseModal}>X</button>
            </div>
        </Portal> : null
    )
}
export default TablePortal