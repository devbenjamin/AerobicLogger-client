import React from 'react';
import styled from 'styled-components';

const StartButton = styled.div `
  background: #0f5e00;
  border-radius: 20px;
  margin 0 auto;
  width: 10em;
  position: relative;
  top: 50%;
  color: #fff;
`

const CenterVertical = styled.div `
  position: relative;
  top: 0.25em;
`

const StartButtonBegin = ()  => {
  return (
    <CenterVertical>
      <div>
        <StartButton>
          <h2>
            Begin! 
          </h2>  
        </StartButton>
      </div>  
    </CenterVertical>
  )
}

export default StartButtonBegin;

