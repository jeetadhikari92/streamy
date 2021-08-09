import React, { useEffect } from "react";
import Modal from "../../Modal";
import history from "../../history";

const StreamDelete = props => {

  useEffect(() => {
    console.log(props)
  }, [props])

  const onDismiss = () => {
    history.push('/')
  }

  return (
    <div>
      <h3>Stream Delete</h3>
      <Modal onDismiss={onDismiss}>
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete the stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default StreamDelete;
