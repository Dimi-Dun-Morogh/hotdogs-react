import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, createHotDog } from '../../redux/hotdogs/hotdogs.actions';
import ModalForm from '../modal-form/modal-form.component';
import CustomButton from '../custom-button/custom-button.component';
import './modal.styles.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      description: '',
      image: '',
      formValid: false,
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    this.validateForm();
  };

  hasError = (error) => {
    return error.length !== 0 ? '' : 'has-error';
  };

  validateForm() {
    const isValid = this.state.name.length && this.state.description.length;
    this.setState({ formValid: Boolean(isValid) });
  }

  handleSubmit(values) {
    console.log(values, 'successss');
    this.props.createHotdog(values);
    this.props.toggleModal(false);
  }

  handleModal = () => {
    this.props.toggleModal(false);
  };

  render() {
    return this.props.showModal ? (
      <div>
        <div className="modal-bg"> </div>
        <ModalForm
          handleModal={this.handleModal}
          onSubmit={(values) => this.handleSubmit(values)}
        />
      </div>
    ) : null;
  }
}
const mapStateToProps = ({ hotdogs: { showModal } }) => ({
  showModal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModal: (bool) => dispatch(toggleModal(bool)),
  createHotdog: (data) => dispatch(createHotDog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
