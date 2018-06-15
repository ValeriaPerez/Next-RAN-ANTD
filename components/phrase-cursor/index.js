/*eslint-disable*/
import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import styled, { keyframes } from 'styled-components';

const ContentPhrase = styled.div`
  .content {
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
    cursor: ew-resize;

    &__label {
      text-align: center;
      color: #fff;
    }
    &__author {
      font-weight: lighter;
    }
    &__phrase {
      margin-left: 4em;
      white-space: nowrap;
      font-size: 3.5em;
      color: #fff;
      font-style: italic;
      font-weight: 700;
      padding: 1.5em 0;
      line-height: 1;
      position: relative;
      display: inline-block;

      @media only screen and (min-width: 1024px) {
        font-size: 7em;
      }
    }
    .skew-right {
      -webkit-transform: skew(-200deg);
      -moz-transform: skew(-200deg);
      transform: skew(200deg);
    }
  }
`;

const PositionLabel = props => {
  const boxClass = ['content__phrase'];
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: { width = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {}
  } = props;

  const move = -100 * x / width;

  if (x < width / 2) {
    boxClass.push('skew-right');
  }

  return (
    <ContentPhrase>
      <h2
        className={boxClass.join(' ')}
        style={{
          WebkitTransform: `translateX(${move}%)`,
          transform: `translateX(${move}%)`
        }}
      >
        “Un libro es un sueño que tienes en tu mano.“ –{' '}
        <span className="content__author">Neil Gaiman</span>
      </h2>
    </ContentPhrase>
  );
};

export default PositionLabel;
