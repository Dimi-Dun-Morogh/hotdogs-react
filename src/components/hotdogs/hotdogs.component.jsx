import React from 'react';
import { connect } from 'react-redux';
import './hotdogs.styles.css';
import HotdogItem from '../hotdog-item/hotdog-item.component';

const Hotdogs = ({ AllHotdogs }) => {
  return (
    <div className="hotdogs-wrapper">
      <div className="hotdogs-header">
        <h3>All hot-dogs</h3>
      </div>
      <div className="hotdogs-container">
        {AllHotdogs.map((item) => (
          <HotdogItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ hotdogs: { AllHotdogs } }) => ({
  AllHotdogs,
});

export default connect(mapStateToProps)(Hotdogs);
