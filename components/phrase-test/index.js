/*eslint-disable*/
import React, { Component } from 'react';
import propTypes from 'prop-types';
// librerias
import { Row, Col } from 'antd/lib';
import styled from 'styled-components';
import ReactAccelerometer from 'react-accelerometer';
import { Motion, spring } from 'react-motion';

const Background = styled.div`
  position: relative;
  background-color: #222c33;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 3.5em;
  color: #fff;
  font-style: italic;
  font-weight: 700;
  padding: 1.5em 0;
  line-height: 1;
  position: relative;
  width: 32em;

  @media only screen and (min-width: 1024px) {
    font-size: 7em;
    padding: 1em 0;
  }
`;

const Author = styled.span`
  font-weight: lighter;
`;

const PhraseScroll = props => (
  <Background type="flex" align="center" justify="center">
    <Motion style={{ x: props.percentage }}>
      {({ x }) => (
        <Title style={{ transform: `translate3d(${x}%, 0, 0)` }}>
          “Un libro es un sueño que tienes en tu mano.“ –{' '}
          <Author>Neil Gaiman</Author>
        </Title>
      )}
    </Motion>
  </Background>
);

PhraseScroll.propTypes = {
  isActive: propTypes.bool,
  percentage: propTypes.number
};

PhraseScroll.defaultProps = {
  isActive: false,
  percentage: 0
};

export default PhraseScroll;
