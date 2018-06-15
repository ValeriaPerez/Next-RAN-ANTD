/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TextStyled = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  text-transform: ${props =>
    props.uppercase === true ? 'uppercase' : 'inital'};
  text-align: ${props => props.textAlign};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
`;

const Text = props => (
  <TextStyled
    uppercase={props.uppercase}
    color={props.color}
    fontSize={props.fontSize}
    fontFamily={props.fontFamily}
    textAlign={props.textAlign}
    fontWeight={props.fontWeight}
  >
    {props.text}
  </TextStyled>
);

Text.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  fontSize: propTypes.string,
  uppercase: propTypes.bool,
  fontFamily: propTypes.string,
  textAlign: propTypes.string,
  fontWeight: propTypes.string
};

Text.defaultProps = {
  text:
    'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
  color: '#000',
  fontSize: '1em',
  uppercase: true,
  fontFamily: 'Montserrat',
  textAlign: 'left',
  fontWeight: '300'
};

export default Text;
