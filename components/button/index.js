/*eslint-disable*/
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: ${props => (props.width ? props.width : 'auto')};
  text-align: ${props => props.align};

  @media only screen and (min-width: 1024px) {
    text-align: ${props => props.alignDesk};
  }
`;
const StyledButton = styled.button`
  width: ${props => (props.width ? props.width : 'auto')};
  outline: none;
  cursor: pointer;
  font-weight: regular;
  background: none;
  border: none;
  text-transform: ${props =>
    props.uppercase === true ? 'uppercase' : 'lowercase'};
  color: ${props => props.color};
  font-size: ${props => `${props.fontSize}px`};
  position: relative;
  z-index: 1;
  padding: 1em 2.5em;
  line-height: 1;

  transition: all 0.2s ease-in-out;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.color};

    transition: all 0.2s ease-in-out;
  }

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    background-color: ${props => props.hover};
    z-index: -1;

    transition: all 0.2s ease-in-out;
  }

  &:hover {
    color: #fff;
    &:before {
      top: 0.5em;
      left: 0.5em;
      right: -0.5em;
      bottom: -0.5em;
    }
    &:after {
      right: 0;
    }
  }

  letter-spacing: -1px;
`;

const Boton = props => (
  <StyledContainer align={props.align} alignDesk={props.alignDesk}>
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      href={props.href}
      color={props.color}
      hover={props.hover}
      width={props.width}
      uppercase={props.uppercase}
      fontSize={props.fontSize}
    >
      {props.text}
    </StyledButton>
  </StyledContainer>
);

Boton.propTypes = {
  uppercase: propTypes.bool,
  color: propTypes.string,
  hover: propTypes.string,
  fontSize: propTypes.string,
  href: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  align: propTypes.string,
  width: propTypes.string,
  alignDesk: propTypes.string
};

Boton.defaultProps = {
  uppercase: true,
  color: '#3c3c3c',
  hover: '#006f9d',
  fontSize: '14',
  href: '#',
  align: 'center',
  disabled: false,
  width: 'auto',
  alignDesk: 'center'
};

export default Boton;
