import React from 'react';

const StyledComponent = ({ isStyled }) => {
  return (
    <div style={isStyled ? styles.styled : styles.plain}>
      <p> {isStyled ? 'Styled' : 'Plain'} component</p>
     

    </div>
    
  );
};

const styles = {
  plain: {
    padding: '20px',
    border: '1px solid #ccc',
    textAlign: 'center',
    margin: '20px',
  },
  styled: {
    padding: '20px',
    border: '1px solidrgb(222, 139, 14)',
    borderRadius: '30px',
    textAlign: 'center',
    backgroundColor: '#43e97b',
    boxShadow: '0 4px 8px #38f9d7',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease',
  },
};

export default StyledComponent;
