import React from 'react';
import * as styles from './styles.css';

const Title = function Title({title}){
  return(
    <div className="titleEffect">
      {title}
    </div>
  )
};

Title.propTypes = {
  title : React.PropTypes.string,
};

export default Title;
