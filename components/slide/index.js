/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Row, Col } from 'antd';

const StyledSlide = styled(Row)`
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  min-height: 400px;
  color: #fff;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    min-height: 550px;

    &:before {
      font-size: 0;
      clear: both;
      visibility: hidden;

      @media only screen and (min-width: 1024px) {
        content: '';
        display: block;
        background-color: #b9b9b9;
        width: 1px;
        position: absolute;
        top: 0;
        height: 19em;
        right: 40%;
        font-size: 17px;
        clear: initial;
        visibility: visible;
      }
    }
  }

  &.active {
    & .head {
      left: 0;
      opacity: 1;
    }
    & .title {
      left: 0;
      opacity: 1;
    }
    & .description {
      left: 0;
      opacity: 1;
    }
    & .image {
      right: 0;
      opacity: 1;
    }
    & .icon {
      right: 3em;
      opacity: 1;
    }
  }
`;

const StyledContent = styled(Col)`
  color: #fff;
  position: relative;
  z-index: 1;
`;

const StyleHead = styled.p`
  font-size: 1.5em;
  color: #fff;
  position: relative;
  left: calc(-100vh - 100%);
  opacity: 0;

  -moz-transition: all 0.85s ease-in-out;
  -o-transition: all 0.85s ease-in-out;
  -webkit-transition: all 0.85s ease-in-out;
  transition: all 0.85s ease-in-out;

  @media only screen and (min-width: 1024px) {
    font-size: 1.9em;
  }
`;

const StyledTitle = styled.h3`
  font-weight: bolder;
  color: #fff;
  position: relative;
  line-height: 1;
  margin: 1em 0;
  font-size: 2.25em;

  left: calc(-100vh - 100%);
  opacity: 0;

  -moz-transition: all 0.95s ease-in-out;
  -o-transition: all 0.95s ease-in-out;
  -webkit-transition: all 0.95s ease-in-out;
  transition: all 0.95s ease-in-out;

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
    bottom: -0.5em;
    left: 0;
  }
`;

const StyledDescription = styled.p`
  color: #fff;
  width: 100%;
  font-size: 1.2em;

  position: relative;
  left: calc(-100vh - 200%);
  opacity: 0;

  -moz-transition: all 0.65s ease-in-out;
  -o-transition: all 0.65s ease-in-out;
  -webkit-transition: all 0.65s ease-in-out;
  transition: all 0.65s ease-in-out;

  @media only screen and (min-width: 1024px) {
    width: 65%;
    font-size: 1.1em;
  }
`;

const StyledList = styled.ol`
  color: #fff;
  font-size: 1.1em;
  width: 100%;
  font-size: 1.2em;
  padding: 0;
  counter-reset: item;

  position: relative;
  left: calc(-100vh - 200%);
  opacity: 0;

  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  -webkit-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;

  & li {
    margin: 0;
    padding: 0 0 0 1.5em;
    text-indent: -1.5em;
    list-style-type: none;
    counter-increment: item;
  }

  & li:before {
    display: inline-block;
    width: 1.5em;
    padding-right: 0.5em;
    font-weight: bold;
    text-align: right;
    content: counter(item);
  }

  @media only screen and (min-width: 1024px) {
    width: 65%;
    font-size: 1.1em;
    min-width: 600px;
  }
`;

const StyledImages = styled.div`
  position: absolute;
  width: 47%;
  right: 0;
  top: 1em;
  display: none;

  @media only screen and (min-width: 1024px) {
    display: block;
  }

  & i {
    display: block;
    width: 77px;
    height: 79px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -3em;
    background-image: url(${props => props.icon});

    right: calc(-100vh - 100%);
    opacity: 0;

    -moz-transition: all 0.55s ease-in-out;
    -o-transition: all 0.55s ease-in-out;
    -webkit-transition: all 0.55s ease-in-out;
    transition: all 0.55s ease-in-out;
  }

  & img {
    display: block;
    width: 100%;

    position: relative;
    right: calc(-100vh - 100%);
    opacity: 0;

    -moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }
`;

const StyledContainer = styled(Col)`
  position: relative;
`;

const RowSlider = styled(Row)``;

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  _setDescription() {
    if (this.props.description) {
      return (
        <StyledDescription className="description">
          {this.props.description}
        </StyledDescription>
      );
    }
    if (this.props.list.length > 0) {
      return (
        <StyledList className="description">
          {this._parseList(this.props.list)}
        </StyledList>
      );
    }
  }

  _parseList(list) {
    const listItems = list.map((e, index) => <li key={index}>{e}</li>);
    return listItems;
  }

  render() {
    return (
      <StyledSlide
        type="flex"
        align="middle"
        background={this.props.background}
        className={this.props.isActive ? 'active' : ''}
      >
        <StyledContainer
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 20, offset: 2 }}
          span={24}
        >
          <Row>
            <StyledContent xs={24} sm={24} md={24} lg={18} span={24}>
              <StyleHead className="head">{this.props.head}</StyleHead>
              <StyledTitle className="title">{this.props.title}</StyledTitle>
              {this._setDescription()}
            </StyledContent>
            <StyledImages icon={this.props.icon}>
              <img className="image" src={this.props.image} />
              <i className="icon" />
            </StyledImages>
          </Row>
        </StyledContainer>
      </StyledSlide>
    );
  }
}

Slide.propTypes = {
  background: PropTypes.string,
  head: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.object,
  list: PropTypes.array,
  isActive: PropTypes.bool
};

Slide.defaultProps = {
  background: '',
  head: '',
  title: '',
  description: '',
  image: '',
  icon: '',
  theme: {},
  list: [],
  isActive: false
};

export default Slide;
