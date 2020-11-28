/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import UpdateForm from '../update-form/update-form.component';
import { updateHotDog, deleteHotDog } from '../../redux/hotdogs/hotdogs.actions';
import './hotdog-item.styles.css';

class HotdogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false,
    };
  }

  editClick = () => {
    this.setState({ showUpdate: true });
  };

  cancelEdit = (value) => {
    this.setState({ showUpdate: value });
  };

  handleSubmit = (values) => {
    this.props.updateHotdog({ ...values, id: this.props.item.id });
    this.setState({ showUpdate: false });
  };

  handleDelete = () => {
    this.props.deleteHotdog(this.props.item.id);
  };

  render() {
    const { name, title, description, image } = this.props.item;
    return (
      <div className="hotdog-item-wrap">
        <div className="hotdog-item-picture" style={{ backgroundImage: `url(${image})` }} />
        {this.state.showUpdate ? (
          <UpdateForm
            initialValues={{ name, title, description, image }}
            item={this.props.item}
            onSubmit={(values) => this.handleSubmit(values)}
            cancelEdit={this.cancelEdit}
            onDelete={(id) => this.handleDelete(id)}
          />
        ) : (
          <div className="description-wrap">
            <span className="hotdog-item-name">{name}</span>
            <span className="hotdog-item-price">{title}</span>
            <p className="hotdog-item-description">{description}</p>
            <CustomButton onClick={this.editClick} style={{ marginTop: 'auto' }}>
              Edit
            </CustomButton>{' '}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateHotdog: (id) => dispatch(updateHotDog(id)),
  deleteHotDog: (id) => dispatch(deleteHotDog(id)),
});

export default connect(null, mapDispatchToProps)(HotdogItem);
