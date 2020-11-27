import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './update-form.styles.css';

import { updateHotDog, deleteHotDog } from '../../redux/hotdogs/hotdogs.actions';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      image: '',
      description: '',
      id: '',
    };
  }

  componentDidMount() {
    this.setState(this.props.item);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleUpdate = () => {
    this.props.updateHotdog(this.state);
    this.props.cancelEdit(false);
  };

  handleDelete = () => {
    this.props.deleteHotDog(this.state.id);
    this.props.cancelEdit(false);
  };

  render() {
    return (
      <div className="form-wrapper">
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
        <textarea
          name="description"
          value={this.state.description}
          rows="5"
          onChange={this.handleChange}
        />
        <CustomButton form onClick={() => this.handleUpdate()}>
          Update
        </CustomButton>
        <CustomButton form onClick={() => this.handleDelete()}>
          Delete
        </CustomButton>
        <CustomButton form onClick={() => this.props.cancelEdit(false)}>
          Cancel
        </CustomButton>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateHotdog: (id) => dispatch(updateHotDog(id)),
  deleteHotDog: (id) => dispatch(deleteHotDog(id)),
});

export default connect(null, mapDispatchToProps)(UpdateForm);
