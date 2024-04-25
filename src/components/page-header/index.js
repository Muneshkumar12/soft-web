import React from 'react';
import '../../styles/page-header.css';
const PageHeader = ({ para, heading }) => {
  return (
    <div>
      <p className='page-heading'>{heading}</p>
      <h1 className='page-para'>{para}</h1>
    </div>
  )
}

export default PageHeader;
