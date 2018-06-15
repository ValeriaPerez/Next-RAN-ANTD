/*eslint-disable*/
import React, { Component } from 'react';
import propTypes, { string } from 'prop-types';
import styled from 'styled-components';

const CardImage = styled.div`
  width: ${props => props.width};
  height: ${props => props.imageHeight};
  background-image: url(${props => props.imageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${props => props.margin};
  position: ${props => props.imagePosition};
  top: ${props => props.imageTop};
  right: ${props => props.imageRight};
  left: ${props => props.imageLeft};

  @media only screen and (min-width: 1024px) {
    width: 23%;
  }
`;

const Image = props => (
  <CardImage
    imageBackground={props.imageBackground}
    alt={props.alt}
    title={props.title}
    imageHeight={props.imageHeight}
    width={props.width}
    imagePosition={props.imagePosition}
    imageTop={props.imageTop}
    imageRight={props.imageRight}
    margin={props.margin}
    imageLeft={props.imageLeft}
  />
);

Image.propTypes = {
  imageBackground: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  imageHeight: propTypes.string,
  width: propTypes.string,
  imagePosition: propTypes.string,
  imageTop: propTypes.string,
  imageRight: propTypes.string,
  imageLeft: propTypes.string,
  margin: propTypes.string
};

Image.defaultProps = {
  imageBackground:
    'http://dashboard.kamikazelab.com/static/images/DEFAULT_MANGA.png',
  alt: 'Imagen',
  title: 'Imagen',
  imageHeight: '200px',
  width: '40%',
  imagePosition: '',
  imageTop: '',
  imageRight: '',
  imageLeft: '',
  margin: 'auto'
};

export default Image;
