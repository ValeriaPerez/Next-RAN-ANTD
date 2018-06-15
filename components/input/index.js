/*eslint-disable*/
import React, { Component } from 'react';
import propTypes, { string } from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  clear: both;
  border: none;
  border-radius: 3px;
`;
const StyledInput = styled.input`
  width: 100%;
  color: ${props => props.color};
  type: ${props => props.type};
  border: 0;
  outline: 0;
  outline: none;
  background: #efeff3;
  border: ${props => (props.colorError ? props.displayError : '#EFEFF3')};
  margin: 0 0 0.5rem 0;
`;
const StyledPH = styled.label`
  color: ${props => props.color};
  display: block;
`;
const StyledError = styled.label`
  color: ${props => props.colorError};
  display: ${props => (props.displayError ? 'block' : 'none')};
`;

const Input = props => (
  <StyledContainer>
    <StyledPH htmlFor={props.name} color={props.color}>
      {props.placeHolder}
    </StyledPH>
    <StyledInput
      value={props.value}
      onChange={props.onChange}
      color={props.color}
      type={props.type}
      name={props.name}
      placeHolder
    />
    <StyledError
      displayError={props.displayError}
      colorError={props.colorError}
    >
      {props.errorMsg}
    </StyledError>
  </StyledContainer>
);

Input.propTypes = {
  color: propTypes.string,
  colorError: propTypes.string,
  displayError: propTypes.bool,
  type: propTypes.string,
  height: propTypes.string,
  placeHolder: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  errorMsg: propTypes.string
};

Input.defaultProps = {
  color: '#222222',
  value: '',
  colorError: '#e40046',
  displayError: false,
  type: 'text',
  placeHolder: 'PLACE HOLDER',
  errorMsg: 'Algo salio mal',
  name: 'name',
  onChange: () => console.log('No esta definido onChange')
};

export default Input;
