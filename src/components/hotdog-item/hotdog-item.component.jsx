/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import UpdateForm from '../update-form/update-form.component';
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

  render() {
    const { name, title, description, image } = this.props.item;
    return (
      <div className="hotdog-item-wrap">
        <div className="hotdog-item-picture" style={{ backgroundImage: `url(${image})` }} />
        {this.state.showUpdate ? (
          <UpdateForm item={this.props.item} cancelEdit={this.cancelEdit}/>
        ) : (
          <div>
            <span className="hotdog-item-name">{name}</span>
            <span className="hotdog-item-price">{title}</span>
            <p className="hotdog-item-description">{description}</p>
            <CustomButton onClick={this.editClick}>Edit</CustomButton>{' '}
          </div>
        )}
      </div>
    );
  }
}

export default HotdogItem;
