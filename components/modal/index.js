/*eslint-disable*/
import React, { Component } from 'react';
import propTypes from 'prop-types';
// librerias
import { Modal } from 'antd/lib';
import styled, { css } from 'styled-components';

const ContentVideo = styled(Modal)`
  .ant-modal-content {
    background: transparent;
    height: 100%;
  }

  .ant-modal-close-x {
    color: white;
    font-size: 2em;
    position: absolute;
    right: -30px;
    top: -30px;
    font-weight: 100;
  }

  .ant-modal-body {
    max-height: initial !important;
    min-height: initial !important;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  position: relative;
  margin: 0 auto;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`;

const Video = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const ModalVideo = props => (
  <ContentVideo
    class
    maskClosable
    onCancel={props.onCancel}
    footer={null}
    width="60%"
    visible={props.openModal}
    bodyStyle={{
      background: 'transparent',
      maxHeight: '400px',
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Content>
      <Video
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </Content>
  </ContentVideo>
);

ModalVideo.propTypes = {};

ModalVideo.defaultProps = {};

export default ModalVideo;
