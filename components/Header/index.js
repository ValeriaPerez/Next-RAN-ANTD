/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// librerias
import { Row, Col } from 'antd/lib';
import styled, { css } from 'styled-components';

const ContentHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  padding: 1em;
`;

const ContentIcons = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    left: 0;
    padding: 1em;
    display: block;
  }
`;

const Icon = styled.a`
  margin: 0.7em;
`;

const Header = props => (
  <ContentHeader>
    <ContentIcons>
      <Icon href="https://www.facebook.com/wowbooks.mx/" target="_blank">
        <img src="../../static/img/icon-facebook.svg" title="Facebook" />
      </Icon>
      <Icon href="https://www.instagram.com/wowbooks.mx/" target="_blank">
        <img src="../../static/img/icon-instagram.svg" title="Instagram" />
      </Icon>
      <Icon
        href="https://www.youtube.com/channel/UC0VBPeooE9Udnc5YPNY1syA?view_as=subscriber"
        target="_blank"
      >
        <img src="../../static/img/icon-youtube.svg" title="YouTube" />
      </Icon>
    </ContentIcons>
    <img src="../../static/img/logo-wowbooks.svg" title="Wow Books" />
  </ContentHeader>
);

export default Header;
