import React from 'react';
import { connect } from 'react-redux';
import './hotdogs.styles.css';

const Hotdogs = ({ AllHotdogs }) => {
  return (
    <div className="hotdogs-wrapper">
      <div className="hotdogs-header">
        <h3>All hot-dogs</h3>
      </div>
    </div>
  );
};

const mapStateToProps = ({ hotdogs: { AllHotdogs } }) => ({
  AllHotdogs,
});

export default connect(mapStateToProps)(Hotdogs);
