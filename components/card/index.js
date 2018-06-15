/*eslint-disable*/
import React, { Component } from 'react';
import propTypes, { string } from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #ff7c80;
  padding: 1em 2em;
  position: absolute;
  bottom: ${props => props.positionBottom};
  right: ${props => props.positionRight};
  left: ${props => props.positionLeft};
  width: ${props => props.width};

  @media only screen and (min-width: 1024px) {
    width: 600px;
    padding: 3em 5em;
  }
`;
const StyledText = styled.h2`
  font-size: 1.3em;
  color: #fff;
  text-align: ${props => props.textAlign};
`;

const Card = props => (
  <StyledCard
    positionRight={props.positionRight}
    positionLeft={props.positionLeft}
    positionBottom={props.positionBottom}
    width={props.width}
  >
    <StyledText textAlign={props.textAlign}>{props.text}</StyledText>
  </StyledCard>
);

Card.propTypes = {
  width: propTypes.string,
  text: propTypes.string,
  textAlign: propTypes.string,
  positionLeft: propTypes.string,
  positionRight: propTypes.string,
  positionBottom: propTypes.string
};

Card.defaultProps = {
  text: 'Inserta un texto',
  textAlign: 'center',
  positionRight: '',
  width: '200px',
  positionBottom: '0'
};

export default Card;
