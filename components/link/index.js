/*eslint-disable*/
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.color};
  font-size: ${props => props.linkSize};
  text-align: ${props => props.textAlign};
  font-family: ${props => props.fontFamily};
  margin: 0 1em;
  &:hover {
    color: ${props => props.colorHover};
  }
`;

const Link = props => (
  <StyledLink
    href={props.link}
    color={props.color}
    textAlign={props.textAlign}
    fontFamily={props.fontFamily}
    target="_blank"
  >
    {props.text}
  </StyledLink>
);

Link.propTypes = {
  color: propTypes.string,
  link: propTypes.string,
  text: propTypes.string,
  textAlign: propTypes.string,
  fontFamily: propTypes.string
};

Link.defaultProps = {
  color: '#000',
  colorHover: '#006F99',
  link: '#',
  text: 'Agrega texto',
  textAlign: 'left',
  fontFamily: 'Montserrat'
};

export default Link;
