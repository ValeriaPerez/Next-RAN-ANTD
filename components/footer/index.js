/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// librerias
import { Row, Col } from 'antd/lib';
import styled, { css } from 'styled-components';
// componentes
import IconImage from '../../components/image-icon';
import Link from '../../components/link';



const FooterRow = styled(Row)`
  background-color: #fff;
  position: relative;
  padding: 2em 0;
  text-align: center;

  .span {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    padding: 2em;
    text-align: left;

    .span {
      display: contents;
    }
  }
`;

const IconsCol = styled(Col)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    justify-content: space-around;
  }
`;

const Icon = styled.a`
  margin: 0.7em;
`;

const Footer = props => (
  <div>
    <FooterRow type="flex" align="center" justify="center">
      <Col xs={20} sm={10} md={10} lg={17} span={24}>
        <img src=".../../static/img/logo-wowbooks-green.svg" title="WowBooks" />
      </Col>
      <IconsCol xs={20} sm={10} md={10} lg={4} span={24}>
        <Icon href="https://www.facebook.com/wowbooks.mx/" target="_blank">
          <img src="../../static/img/icon-facebook-gray.svg" title="Facebook" />
        </Icon>
        <Icon href="https://www.instagram.com/wowbooks.mx/" target="_blank">
          <img src="../../static/img/icon-instagram-gray.svg" title="Instagram" />
        </Icon>
        <Icon
          href="https://www.youtube.com/channel/UC0VBPeooE9Udnc5YPNY1syA?view_as=subscriber"
          target="_blank"
        >
          <img src="../../static/img/icon-youtube-gray.svg " title="YouTube" />
        </Icon>
      </IconsCol>
    </FooterRow>
    <FooterRow type="flex" align="center" justify="start">
      <Col xs={20} sm={20} md={20} lg={20} span={24}>
        {/* <Link text={'Términos y Condiciones'} textAlign={'center'} />
          <span className="span">-</span> */}
        <Link
          text="Aviso de Privacidad"
          link="../../static/pdf/aviso-de-privacidad.pdf"
          textAlign="center"
        />
      </Col>
    </FooterRow>
  </div>
);

export default Footer;
