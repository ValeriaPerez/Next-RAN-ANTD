/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardImage = styled.img`
  max-width: 150px;
  min-width: 35px;
  max-height: ${props => props.height};
  margin: 1em;

  @media only screen and (min-width: 1024px) {
  }
`;

const IconImage = props => (
  <a href={props.href} title={props.titleLink} target="_blank">
    <CardImage
      src={props.image}
      alt={props.alt}
      title={props.title}
      height={props.height}
    />
  </a>
);

IconImage.propTypes = {
  height: propTypes.string
};

IconImage.defaultProps = {
  height: '100%'
};

export default IconImage;
