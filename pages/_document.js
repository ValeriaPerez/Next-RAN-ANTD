/*eslint-disable*/
/* eslint-disable*/ 
import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';
import Helmet from 'react-helmet';
import stylesheet from 'antd/dist/antd.min.css';
import { ServerStyleSheet } from 'styled-components';
import AppIcons from '../components/AppIcons';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    font-family: 'Montserrat';
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...page, styleTags, helmet: Helmet.rewind() };
  }

  // should render on <html>
  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <head>
  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map(el => this.props.helmet[el].toComponent())
      .filter(
        el =>
          el.length > 0 ||
          !(Object.keys(el).length === 0 && el.constructor === Object)
      );

    return keys.length ? keys : [];
  }

  render() {
    return (
      <html lang="en" {...this.helmetHtmlAttrComponents()}>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta httpEquiv="expires" content="10800" />
          {this.helmetHeadComponents()}
          {AppIcons()}
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <script type="text/javascript" src="/static/tag.js" />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,400,700"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>WowBooks</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="WowBooks | WowBooks" />
          <meta
            property="og:image"
            content="http://{{ request.META.HTTP_HOST }}"
          />
          <meta
            property="og:url"
            content="http://{{ request.META.HTTP_HOST }}/"
          />
          <meta property="og:description" content="" />
          <meta property="og:site_name" content="WowBooks" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="WowBooks | WowBooks" />
          <meta
            name="twitter:image"
            content="http://{{ request.META.HTTP_HOST }}"
          />
          <meta
            name="twitter:site"
            content="http://{{ request.META.HTTP_HOST }}/"
          />
          <meta name="twitter:description" content="" />
          <meta name="twitter:creator" content="" />
          <link rel="icon" type="image/png" href="../static/img/favicon.png" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KS7Q782"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
