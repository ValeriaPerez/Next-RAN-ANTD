/*eslint-disable*/
import React, { Component } from 'react';
import propTypes from 'prop-types';
// librerias
import { Row, Col, Icon, Button } from 'antd/lib';
import styled, { css } from 'styled-components';
// componentes
import ButtonStyled from '../../components/button';

const Background = styled(Row)`
  position: relative;
  background-image: url('../../static/img/imagen-video-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 60vh;
  color: white;
  & h3 {
    color: white;
    font-weight: 700;
    font-size: 2em;
  }
  & p {
    font-size: 1.5em;
    font-weight: 200;
  }
  & i {
    font-size: 5em;
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    h3 {
      font-size: 3.4em;
    }

    & p {
      font-size: 2.5em;
      font-weight: 200;
    }
    & i {
      font-size: 6.5em;
      cursor: pointer;
      margin: 1em;
    }
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 2em 0;

  div {
    width: 100%;

    & p {
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 200px;
        height: 100%;
        background-image: url('../../static/img/rayon-blanco.png'});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 1.5em;
        left: 5em;

        @media only screen and (min-width: 1024px) {
          width: 500px;
          height: 100%;
          top: 1.5em;
          left: 1em;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    justify-content: end;
    text-align: left;
    margin: 5em 0 10em;
    div {
      width: 60%;
      text-align: left;
    }
  }
`;

const VideoStatic = props => (
  <Background type="flex" align="center" justify="center">
    <Col xs={22} sm={24} md={20} lg={20} span={24}>
      <Row type="flex" justify="center" style={{ height: '100%' }}>
        <Content>
          <div>
            <h3>Deja que tu historia y WowBooks inspiren a otros.</h3>
            <p>¡Atrévete a publicar!</p>
          </div>
          <Icon type="play-circle-o" onClick={props.onClick} />
        </Content>
      </Row>
    </Col>
  </Background>
);

VideoStatic.propTypes = {
  onClick: propTypes.func
};

VideoStatic.defaultProps = {};

export default VideoStatic;
