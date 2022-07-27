import React from "react";
import PropTypes from 'prop-types';

//a header component which is a html header part in the html form
function Header({ text }) {
    const headstyle={
        backgroundColor: 'red', color: 'green'
    }
  return (
    //inline style need using {{}}
    <header style = {headstyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
//setting up default props for the component with CompoentName.defaultProps={}
Header.defaultProps = {
  text: "Feedback UI",
};
//setting property type checking 
//syntax: ComponentName.propTypes={propertyName: PropTypes.specificType}
Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header;
