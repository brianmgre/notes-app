import React from "react";
import { connect } from "react-redux";
import { openModal } from "../actions/modal";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import NoteForm from "./noteForm";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  modalContainer: {
    border: "1px solid purple",
    position: "absolute",
    width: "50%",
    right: "25%",
    top: "20%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      right: "5%",
      top: "7%"
    }
  }
});

const NoteModal = props => {
  const { modal, classes } = props;

  const modalOpen = () => {
    props.dispatch(openModal());
  };

  return (
    <Modal open={modal} onClose={modalOpen}>
      <Paper className={classes.modalContainer}>
        <NoteForm />
      </Paper>
    </Modal>
  );
};

const mapStateToProps = ({ modal }) => {
  return {
    modal: modal
  };
};

export default connect(mapStateToProps)(withStyles(styles)(NoteModal));
