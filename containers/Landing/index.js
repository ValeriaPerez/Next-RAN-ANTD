/*eslint-disable*/
import React from 'react';
// axios
import axios from 'axios';
// librerias
import styled, { keyframes } from 'styled-components';
// antd
import { Form, Input, Icon, Row, Col, notification, BackTop } from 'antd';

// material iu
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';

// components
import ButtonStyled from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/Header';
import Title from '../../components/title';
import VideoCard from '../../components/video-card';
import VideoStatic from '../../components/video-static';
import Phrase from '../../components/phrase-scroll';
import Modal from '../../components/modal';
import WowCarousel from '../../components/wow-carousel';

const FormItem = Form.Item;
const { TextArea } = Input;

const StyledDrawer = styled.div`
  background-color: #d8dad6;
  padding: 2em 5em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonForm = styled.div`
  background-color: #006f9d;
  padding: 0.5em;
  color: #fff;
  position: absolute;
  width: auto;
  height: 100vh;
  right: ${props => props.right};
  left: ${props => props.left};
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  position: fixed;
  opacity: 1;
  cursor: pointer;

  &:hover {
    background-color: #025c82;
  }

  transition: all 0.5s, transform 0.5s;

  & .close {
    display: block;
    position: absolute;

    left: -7.3em;
    width: 19em;
    display: flex;
    align-items: center;
    justify-content: space-around;

    transform: rotateZ(-90deg);
    opacity: 1;
    text-transform: uppercase;
    font-size: 0.7em;
    transition: all 0.5s, transform 0.5s;
    font-weight: lighter;

    @media only screen and (min-width: 1024px) {
      font-size: 1em;
      left: -8.7em;
      width: 20.5em;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  .close-scroll {
    display: block;
    position: absolute;

    left: -4.5em;
    width: 11em;

    transform: rotateZ(-90deg);

    opacity: 1;
    text-transform: uppercase;
    font-size: 0.7em;
    transition: all 0.5s, transform 0.5s;
    font-weight: lighter;

    @media only screen and (min-width: 1024px) {
      font-size: 1em;
      left: -2.5em;
      width: 7em;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .open {
    opacity: 1;
    transform: rotateZ(-90deg);
    transition: all 0.5s, transform 0.5s;
    margin: 7px;
  }

  .close-text {
    opacity: 0;
    transition: all 0.5s, transform 0.5s;

    @media only screen and (min-width: 1024px) {
      opacity: 1;
    }
  }

  &.height {
    height: 120px;

    @media only screen and (min-width: 1024px) {
      height: 160px;
    }
  }
`;

const IconStyled = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2em;
  margin: 1em;
  cursor: pointer;
`;

const CardVideo = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url('../../static/img/home-video-brocha.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;


  & .video-home {
    opacity: 0;
    transition: all .5s, transform .5s;
  }

  @media only screen and (min-width: 1024px) {
    & .video-home {
      opacity: 1;
    }
  }
    
  overflow: hidden;
  position: fixed;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 100%;
  min-height: 100vh;
`;

const CardTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(32, 32, 32, 0.2);
  background-image: url('../../static/img/texture-negro.png'});
`;

const CardVideoText = styled.div`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: center;
`;

const InputForm = styled(FormItem)`
  margin-bottom: 0 !important;

  & .has-error {
    color: #d21329;
    font-size: 9px;
    margin-bottom: 8px;
    margin-top: -1px;
  }
`;

const StyledRow = styled(Row)`
  background-color: #fff;
  position: relative;

  padding: 2em;

  &:after {
    font-size: 0;
    clear: both;
    visibility: hidden;

    @media only screen and (min-width: 1024px) {
      content: '';
      display: block;
      background-color: #b9b9b9;
      width: 1px;
      position: absolute;
      bottom: 0;
      height: 5em;
      right: 40%;
      font-size: 17px;
      clear: initial;
      visibility: visible;
    }
  }
`;

const scrollAnimation = keyframes`
  0% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
`;

const Scroll = styled.div`
  width: 18px;
  position: absolute;
  bottom: 1em;
  animation: ${scrollAnimation} 2s linear infinite;
`;

const ImgScroll = styled.img`
  width: 18px;
`;

const TextVertical = styled.p`
  color: white;
  -webkit-transform: rotate(270deg);
  font-size: 10px;
`;

const CarouselRow = styled(Row)`
  position: relative;
  width: 100%;
  background-color: rgb(34, 44, 51);
`;

const FormRow = styled(Row)`
  background-color: #e6e6e6;
  position: relative;
  justify-content: center;
  align-items: center;
  min-height: 500px;

  & h3 {
    font-size: 3em;
    color: #000;
    font-weight: 700;
  }

  & form {
    width: 100%;
    max-width: 340px;
    margin: 2em auto;
  }
`;

const ItemInfo = styled.div`
  padding: 3em 0 0;

  .content-call {
    flex-direction: column;
    @media only screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }

  & .call {
    width: 2em;
  }

  & div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (min-width: 1024px) {
    padding: 2em 0;
  }
`;
const TellUs = styled.h2`
  position: relative;
  z-index: 1;
  font-size: 2em;
  line-height: 1.2em;

  @media only screen and (min-width: 480px) {
    font-size: 2em;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3.25em;
  }

  &:before {
    content: '';
    display: block;
    background-image: url('../../static/img/rayon-verde.png');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: -1em;
    top: -1em;
    height: 3em;
    width: 4em;
  }

  & span {
    background-color: #013246;
    color: #fff;
    font-weight: 600;
    position: relative;
  }
`;

const ContactText = styled.span`
  font-size: 1.3em;
  letter-spacing: 2px;
  font-weight: 400;
  color: #006f9d;

  @media only screen and (min-width: 1024px) {
    font-size: 2em;
  }
`;

const ContactNumber = styled.span`
  font-size: 1.3em;
  font-weight: 700;

  @media only screen and (min-width: 1024px) {
    font-size: 2em;
  }
`;

const ButtonTop = styled(BackTop)`
  position: absolute;
  bottom: 0.5em !important;
  right: 0 !important;

  .ant-back-top-content {
    background-color: #006f9d;
    border-radius: 0;

    &:hover {
      background-color: #025c82;
    }
  }
`;

const BackgroundPhrase = styled.div`
  position: relative;
  background-color: #222c33;
  overflow: hidden;

  .content {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    box-sizing: border-box;
    cursor: ew-resize;
  }
`;

const openNotificationError = type => {
  notification[type]({
    message: 'Error',
    description: 'Algo ocurrio, intentalo nuevamente.'
  });
};

const openNotificationSuccess = type => {
  notification[type]({
    message: 'Exito',
    description: 'Gracias por tu mensaje te contactaremos a la brevedad.'
  });
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: true,
      openModal: false,
      videoTop: false,
      scrollPhrase: false,
      scrollPhraseActive: false,
      forma: '',
      buttonSubmit: false
    };
    this.getElementBounding = this.getElementBounding.bind(this);
    this.getScrollSize = this.getScrollSize.bind(this);
    this.getBodyScrollTop = this.getBodyScrollTop.bind(this);
    this.handleforma = this.handleforma.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  handleModal = () => this.setState({ openModal: !this.state.openModal });
  handleTopVideo = () => this.setState({ videoTop: !this.state.videoTop });
  handleforma = f => {
    this.setState({
      forma: f
    });
  };

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
  }

  handleAnimation = e => {
    if (this.getBodyScrollTop() >= 150) {
      this.setState({
        hidden: false
      });
    }

    if (this.getBodyScrollTop() < 150) {
      this.setState({
        hidden: true
      });
    }

    if (!this.state.scrollPhraseActive) {
      const ph = this.getElementBounding('PhraseRow');
      const scroll = this.getScrollSize(window.innerHeight, ph.height);
      if (ph.top < scroll) {
        this.setState({
          scrollPhrase: true,
          scrollPhraseActive: true
        });
      }
    }
  };

  getBodyScrollTop = () =>
    Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

  getElementBounding = element =>
    document.getElementById(element).getBoundingClientRect();

  getScrollSize = (window, element) =>
    /*
    if(window > (element/2)){
      return parseInt(window - (element/2));
    }
    else{
      return parseInt(window/2);
    }
  */
    parseInt(window - 20);

  handleReset = () => {
    this.props.form.resetFields();
  };

  handleSubmit = e => {
    e.preventDefault();
    const x = this;
    const id = this.state.forma;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const body = {
          name: values.name,
          email: values.mail,
          phone: values.phone,
          message: values.msj
        };
        this.setState({ buttonSubmit: true });

        axios({
          method: 'POST',
          url: 'https://pb5pp9cczg.execute-api.us-west-2.amazonaws.com/dev',
          data: JSON.stringify(body),
          contentType: 'application/json'
        })
          .then(response => {
            if (!response.data.success) {
              openNotificationSuccess('success');
              x.handleClose();
              x.handleReset();
              x.setState({ buttonSubmit: false });

              // evento correcto
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'Tracklead'
              });

              // dice de que boton viene el evento
              gtag('event', 'Convertion', {
                event_category: 'Form',
                event_label: id
              });
              /* ga('send', {
              hitType: 'event',
              eventCategory: 'Lead en sitio',
              eventAction: 'send',
              eventLabel: 
            }); */
            } else {
              openNotificationError('error');
              x.handleClose();
              x.handleReset();
            }
          })
          .catch(error => {
            openNotificationError('error');
            x.handleClose();
            x.handleReset();
            x.setState({ buttonSubmit: false });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* FORMULARIO 1 */}
        <MuiThemeProvider>
          <div>
            <ButtonForm
              right="0"
              onClick={this.handleToggle}
              className={this.state.hidden === true ? '' : 'height'}
              style={
                this.state.hidden === true
                  ? { padding: '1.7em' }
                  : { padding: '1em' }
              }
            >
              {this.state.hidden === true ? (
                <span className="close">
                  Formulario de proyecto<Icon
                    className="open"
                    type="right"
                    style={{ fontSize: '2em' }}
                  />
                </span>
              ) : (
                <span className="close-scroll">
                  Formulario<Icon
                    className="open"
                    type="right"
                    style={{ fontSize: '1.5em' }}
                  />
                </span>
              )}
            </ButtonForm>
            <Drawer
              docked={false}
              width={410}
              style={{ zIndex: '100' }}
              openSecondary
              open={this.state.open}
              onRequestChange={open => this.setState({ open })}
            >
              <StyledDrawer>
                <ButtonForm onClick={this.handleToggle} left="0">
                  <Icon type="right" style={{ fontSize: '2em' }} />
                </ButtonForm>
                <IconStyled onClick={this.handleToggle} type="close" />
                <Title
                  uppercase={false}
                  title="Cuéntanos más sobre tu proyecto de libro."
                  fontSizeDesk="1.5em"
                />
                <Form onSubmit={this.handleSubmit}>
                  <InputForm>
                    {getFieldDecorator('name', {
                      rules: [{ required: true, message: 'Escribe tu nombre' }]
                    })(<Input name="name" placeholder="Nombre" />)}
                  </InputForm>

                  <InputForm>
                    {getFieldDecorator('mail', {
                      rules: [
                        {
                          required: true,
                          type: 'email',
                          message: 'Escribe tu e-mail'
                        }
                      ]
                    })(<Input name="email" placeholder="Correo Electrónico" />)}
                  </InputForm>

                  <InputForm>
                    {getFieldDecorator('phone', {
                      rules: [
                        { required: true, message: 'Escribe tu teléfono' }
                      ]
                    })(
                      <Input type="text" name="phone" placeholder="Teléfono" />
                    )}
                  </InputForm>

                  <InputForm>
                    {getFieldDecorator('msj', {
                      rules: [{ required: true, message: 'Escribe un mensaje' }]
                    })(
                      <TextArea
                        name="msj"
                        type="textarea"
                        rows={5}
                        placeholder="Mensaje"
                      />
                    )}
                  </InputForm>

                  {this.state.buttonSubmit === true ? (
                    <Icon
                      type="loading"
                      style={{
                        fontSize: '2em',
                        margin: '0.5em',
                        color: '#006f9d',
                        width: '92%'
                      }}
                    />
                  ) : (
                    <FormItem style={{ marginTop: '1em' }}>
                      <ButtonStyled
                        text="Enviar"
                        type="primary"
                        htmlType="submit"
                        color="#3c3c3c"
                        hover="#006f9d"
                        width="100%"
                        onClick={() => this.handleforma('Lead Bottom')}
                      >
                        Enviar
                      </ButtonStyled>
                    </FormItem>
                  )}
                </Form>
              </StyledDrawer>
            </Drawer>
          </div>
        </MuiThemeProvider>

        {/* ANIMACION HEADER */}
        <CardVideo>
          <Video className="video-home" autoPlay loop muted>
            <source src="../../static/videos/video-home.mp4" type="video/mp4" />
          </Video>
          <CardTexture />
        </CardVideo>
        <Row type="flex" align="center" justify="center">
          <Col xs={24} sm={24} md={24} lg={22} span={24}>
            <CardVideoText>
              <Header />
              <Title
                title="Aquí creemos en crear."
                color="#fff"
                fontSize="2em"
                fontSizeDesk="6em"
                uppercase={false}
              />
              <Scroll>
                <TextVertical>SCROLL</TextVertical>
                <ImgScroll src="../../static/img/scroll.png" />
              </Scroll>
            </CardVideoText>
            <CardVideoText>
              <Title
                title="Somos una editorial digital que busca impulsar los proyectos de artistas y creativos mexicanos, para lograr concretar sus sueños a través de un libro, por medio de un modelo de crowdfunding."
                color="#fff"
                fontSize="2em"
                fontSizeDesk="4em"
                uppercase={false}
              />
            </CardVideoText>
          </Col>
        </Row>

        {/* VIDEO */}
        <StyledRow type="flex" align="center" justify="center">
          <Col xs={24} sm={24} md={20} lg={20} span={24}>
            <VideoCard onClick={this.handleTopVideo} />
            {this.state.videoTop === true ? (
              <Modal
                openModal={this.state.videoTop}
                onCancel={this.handleTopVideo}
                url={
                  'https://www.youtube.com/embed/Q7P9B8SI1uk?rel=0&amp;showinfo=0'
                }
              />
            ) : null}
          </Col>
        </StyledRow>

        {/* CARRUSEL */}

        <CarouselRow>
          <WowCarousel />
        </CarouselRow>

        {/* PHRASE */}
        <BackgroundPhrase>
          <Phrase />
        </BackgroundPhrase>

        {/* VIDEO 2 */}
        <VideoStatic onClick={this.handleModal} />
        {this.state.openModal === true ? (
          <Modal
            openModal={this.state.openModal}
            onCancel={this.handleModal}
            url={
              'https://www.youtube.com/embed/daMgK1_mu40?rel=0&amp;showinfo=0'
            }
          />
        ) : null}

        {/* FORMULARIO 2 */}

        <FormRow type="flex" align="center" justify="center">
          <Col xs={20} sm={20} md={20} lg={9} span={24}>
            <ItemInfo>
              <TellUs>
                <span>Cuéntanos sobre tu proyecto de libro.</span>
              </TellUs>
              <p>
                Nos interesa impulsar el talento de todos aquellos que tienen
                algo que contar al mundo. Déjanos tu información y te
                contactaremos para publicar tu libro.
              </p>
              <div className="content-call">
                <img className="call" src="../../static/img/call_icono.svg" />
                <ContactText>Contáctanos</ContactText>
                <a
                  style={{ color: '#006f9d', letterSpacing: '4px' }}
                  href="tel:+525567299133"
                >
                  <ContactNumber>(55)</ContactNumber>
                  <ContactNumber>67</ContactNumber>
                  <ContactNumber>29</ContactNumber>
                  <ContactNumber>91</ContactNumber>
                  <ContactNumber>33</ContactNumber>
                </a>
              </div>
            </ItemInfo>
          </Col>

          <Col xs={20} sm={20} md={20} lg={7} span={24}>
            <Form onSubmit={this.handleSubmit}>
              <InputForm>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Escribe tu nombre' }]
                })(<Input name="name" placeholder="Nombre" />)}
              </InputForm>

              <InputForm>
                {getFieldDecorator('mail', {
                  rules: [
                    {
                      required: true,
                      type: 'email',
                      message: 'Escribe tu e-mail'
                    }
                  ]
                })(<Input name="email" placeholder="Correo Electrónico" />)}
              </InputForm>

              <InputForm>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Escribe tu teléfono' }]
                })(<Input type="text" name="phone" placeholder="Teléfono" />)}
              </InputForm>

              <InputForm>
                {getFieldDecorator('msj', {
                  rules: [{ required: true, message: 'Escribe un mensaje' }]
                })(
                  <TextArea
                    name="msj"
                    type="textarea"
                    rows={5}
                    placeholder="Mensaje"
                  />
                )}
              </InputForm>

              {this.state.buttonSubmit === true ? (
                <Icon
                  type="loading"
                  style={{
                    fontSize: '2em',
                    margin: '0.5em',
                    color: '#006f9d',
                    width: '92%'
                  }}
                />
              ) : (
                <FormItem style={{ marginTop: '1em' }}>
                  <ButtonStyled
                    text="Enviar"
                    type="primary"
                    htmlType="submit"
                    color="#3c3c3c"
                    hover="#006f9d"
                    width="100%"
                    onClick={() => this.handleforma('Lead Bottom')}
                  >
                    Enviar
                  </ButtonStyled>
                </FormItem>
              )}
            </Form>
          </Col>
        </FormRow>

        {/* FOOTER */}
        <Footer />
        <ButtonTop visibilityHeight="2000" />
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Landing);

export default WrappedNormalLoginForm;
