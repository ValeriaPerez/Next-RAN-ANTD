/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Carousel, Row, Col } from 'antd';
import Slide from '../slide';

const StyledCarouselContaner = styled(Row)`
  position: relative;

  & .ant-carousel .slick-arrow.slick-prev {
    left: 0;
  }

  & .ant-carousel .slick-arrow.slick-next {
    right: 0;
  }

  & .ant-carousel .slick-dots {
    bottom: 30px;

    & li {
      margin: 0 8px;
    }

    & li button {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    & li.slick-active button {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    @media only screen and (min-width: 1024px) {
      right: 24%;
      bottom: 20%;
      text-align: right;
    }
  }

  & .ant-carousel .slick-arrow {
    display: block;
    width: 20%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0;
    z-index: 1;

    &.slick-prev {
      left: 0;
      cursor: url(../../static/img/arrow-left.svg), auto;
    }
    &.slick-next {
      right: 0;
      cursor: url(../../static/img/arrow-right.svg), auto;
    }
  }
`;

const StyledCarousel = styled(Carousel)``;

class WowCarousel extends React.Component {
  constructor(props) {
    super(props);
    this._beforeChange = this._beforeChange.bind(this);
    this._afterChange = this._afterChange.bind(this);

    this.state = {
      active_0: true,
      active_1: false,
      active_2: false,
      active_3: false
    };
  }

  _beforeChange = (a, b, c) => {
    if (b == 0) {
      this.setState({
        active_0: true,
        active_1: false,
        active_2: false,
        active_3: false
      });
    } else if (b == 1) {
      this.setState({
        active_0: false,
        active_1: true,
        active_2: false,
        active_3: false
      });
    } else if (b == 2) {
      this.setState({
        active_0: false,
        active_1: false,
        active_2: true,
        active_3: false
      });
    } else if (b == 3) {
      this.setState({
        active_0: false,
        active_1: false,
        active_2: false,
        active_3: true
      });
    }
  };

  _afterChange = (a, b, c) => {};

  render() {
    return (
      <StyledCarouselContaner>
        <StyledCarousel
          ref={c => (this.slider = c)}
          arrows
          beforeChange={this._beforeChange}
          afterChange={this._afterChange}
        >
          <div>
            <Slide
              background="../../static/img/slide-1-bck.jpg"
              head="Imprime el proyecto de tu vida"
              title="Una nueva forma para financiar tu proyecto"
              description="Wowbooks es un sistema de cooperación colectiva. Creamos una plataforma digital destinada a recaudar fondos, en el que diferentes personas comparten el mismo objetivo: ver tu proyecto publicado."
              image="../../static/img/slide-1.jpg"
              icon="../../static/img/slide-1-icon.svg"
              isActive={this.state.active_0 === true}
            />
          </div>

          <div>
            <Slide
              background="../../static/img/slide-3-bck.jpg"
              head="Imprime el proyecto de tu vida"
              title="Queremos publicar tu arte."
              description="Nuestro objetivo es descubrir nuevos proyectos e impulsar a artistas y personas creativas para que compartan su obra, publicando sus creaciones en diferentes disciplinas como diseño, pintura, fotografía, ilustración, gastronomía, moda, arquitectura y arte en general, a través de un libro."
              image="../../static/img/slide-3.jpg"
              icon="../../static/img/slide-3-icon.svg"
              isActive={this.state.active_1 === true}
            />
          </div>

          <div>
            <Slide
              background="../../static/img/slide-2-bck.jpg"
              head="Imprime el proyecto de tu vida"
              title="¿Qué necesitas para empezar?"
              list={[
                'Tener material, como gráficos, ilustraciones y fotografías de calidad.',
                'Llena el formulario y te contactaremos para que nos cuentes más sobre tu proyecto de libro.',
                'Si cumple con los requisitos comenzaremos con el proceso de publicación.'
              ]}
              image="../../static/img/slide-2.jpg"
              icon="../../static/img/slide-2-icon.svg"
              isActive={this.state.active_2 === true}
            />
          </div>

          <div>
            <Slide
              background="../../static/img/slide-4-bck.jpg"
              head="Imprime el proyecto de tu vida"
              title="¿Qué es crowdfunding?"
              description="Crowdfunding es una cooperación colectiva, generada por una red de personas con el objetivo de conseguir dinero para así poder concretar un proyecto: tu libro."
              image="../../static/img/slide-4.jpg"
              icon="../../static/img/slide-4-icon.svg"
              isActive={this.state.active_3 === true}
            />
          </div>
        </StyledCarousel>
      </StyledCarouselContaner>
    );
  }
}

WowCarousel.propTypes = {
  width: PropTypes.string,
  theme: PropTypes.object
};

WowCarousel.defaultProps = {
  width: '200px',
  theme: {}
};

export default WowCarousel;
