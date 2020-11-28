import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, createHotDog } from '../../redux/hotdogs/hotdogs.actions';
import ModalForm from '../modal-form/modal-form.component';
import './modal.styles.css';

const Modal = ({ showModal, createHotdog, toggleModal }) => {
  const handleSubmit = (values) => {
    createHotdog(values);
    toggleModal(false);
  };

  const handleModal = () => {
    toggleModal(false);
  };

  return showModal ? (
    <div>
      <div className="modal-bg"> </div>
      <ModalForm handleModal={handleModal} onSubmit={(values) => handleSubmit(values)} />
    </div>
  ) : null;
};
const mapStateToProps = ({ hotdogs: { showModal } }) => ({
  showModal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: (bool) => dispatch(toggleModal(bool)),
  createHotdog: (data) => dispatch(createHotDog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
