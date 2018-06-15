/*eslint-disable*/
import React, { Component } from 'react';
import propTypes from 'prop-types';
// librerias
import { Row, Col, Icon } from 'antd/lib';
import styled, { css } from 'styled-components';
// componentes
import ButtonStyled from '../../components/button';

const BackgroundRow = styled(Row)`
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 4em 0;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    text-align: left;
  }

  img {
    width: 100%;
  }

  h3 {
    display: inline;
    color: #006f99;
    font-weight: 700;
    font-size: 2em;
    position: relative;

    @media only screen and (min-width: 1024px) {
      font-size: 3.7em;
    }

    &:before {
      content: '';
      display: block;
      width: 2.5em;
      height: 1px;
      background-color: #bcd851;
      position: absolute;
      top: 1.5em;
      left: 0;
    }

    &:after {
      content: '';
      display: block;
      width: 100px;
      min-height: 50px;
      max-height: 100px;
      background-image: url('../../static/img/rayon-atrevete.png');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: 1.2em;
      right: 0;

      @media only screen and (min-width: 1024px) {
        width: 200px;
      }
    }
  }

  p {
    margin: 4em 0;
    text-align: center;
    @media only screen and (min-width: 1024px) {
      width: 200px;
      text-align: left;
      margin: 4em 0 4em calc(100% - 200px);
    }
  }
`;

const ContetVideo = styled.div`
  position: relative;
  width: 100%;

  i {
    font-size: 4em;
    position: absolute;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    color: #fff;
    cursor: pointer;
    z-index: 5;
  }
`;

const PositionText = styled(Col)`
  text-align: center;
  margin-top: 4em;

  @media only screen and (min-width: 1024px) {
    position: absolute !important;
    text-align: right;
    right: 0;
  }
`;

const VideoCard = props => (
  <BackgroundRow>
    <Col xs={24} sm={20} md={20} lg={16} span={24}>
      <ContetVideo>
        <img src="../../static/img/imagen-video.jpg" />
        <Icon type="play-circle-o" onClick={props.onClick} />
      </ContetVideo>
    </Col>
    <PositionText xs={24} sm={20} md={20} lg={20} span={24}>
      <h3>Atrévete a publicar</h3>
      <p>Traslada a otros a tu mundo con tu libro.</p>
    </PositionText>
  </BackgroundRow>
);

VideoCard.propTypes = {
  animate: propTypes.string,
  onClick: propTypes.func
};

VideoCard.defaultProps = {
  animate: ''
};

export default VideoCard;
