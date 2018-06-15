/*eslint-disable*/
import React, { Component } from 'react';
import propTypes from 'prop-types';
// librerias
import { Row, Col } from 'antd/lib';
import styled, { css, keyframes } from 'styled-components';

const Background = styled.div`
  position: relative;
  background-color: #222c33;
  overflow: hidden;
`;

const moveX = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: -32em;
  }
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
  left: 100%;

  &.active {
    animation: ${moveX} 10s linear infinite;

    @media only screen and (min-width: 1024px) {
      animation: ${moveX} 20s linear infinite;
    }
  }

  animation: none;

  @media only screen and (min-width: 1024px) {
    font-size: 7em;
  }
`;

const Author = styled.span`
  font-weight: lighter;
`;

const PhraseScroll = props => (
  <Background type="flex" align="center" justify="center">
    <Title className={props.isActive ? 'active' : ''}>
      “Un libro es un sueño que tienes en tu mano.“ –{' '}
      <Author>Neil Gaiman</Author>
    </Title>
  </Background>
);

PhraseScroll.propTypes = {
  isActive: propTypes.bool
};

PhraseScroll.defaultProps = {
  isActive: false
};

export default PhraseScroll;
