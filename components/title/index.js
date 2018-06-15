/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const TitleStyled = styled.h2`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  text-transform: ${props =>
    props.uppercase === true ? 'uppercase' : 'initial'};
  font-family: ${props => props.fontFamily};
  font-weight: 700;

  @media only screen and (min-width: 1024px) {
    font-size: ${props => props.fontSizeDesk};
  }
`;

const Title = props => (
  <TitleStyled
    uppercase={props.uppercase}
    color={props.color}
    fontSize={props.fontSize}
    fontFamily={props.fontFamily}
    fontSizeDesk={props.fontSizeDesk}
  >
    {props.title}
  </TitleStyled>
);

Title.propTypes = {
  title: propTypes.string,
  color: propTypes.string,
  fontSize: propTypes.string,
  uppercase: propTypes.bool,
  fontFamily: propTypes.string,
  textPink: propTypes.string,
  colorSpan: propTypes.string,
  fontSizeSpan: propTypes.string,
  fontSizeDesk: propTypes.string
};

Title.defaultProps = {
  title: 'titulo',
  color: '#000',
  fontSize: '2em',
  uppercase: true,
  fontFamily: 'Montserrat',
  text: '',
  colorSpan: '#BAD865',
  fontSizeSpan: '',
  fontSizeDesk: '2.5em'
};

export default Title;
