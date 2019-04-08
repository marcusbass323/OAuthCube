import React from 'react';

const FacebookModal = ({ handleClose, Facebookshow, children }) => {
    const showHideClassName = Facebookshow ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
        <section>
      {children}
      <div className="form">
        <h4>Form</h4>
        <button onClick={handleClose}>close</button>
      </div>
    </section>
  </div>
    );
};
  
export default FacebookModal;