// @flow
import * as React from 'react';
import { Row, Col } from 'antd';

export default () => (
  <div>
    <p>HOLALA</p>
    <div>
      <Row>
        <Col span={12} offset={6}>
          <p>Columna</p>
        </Col>
      </Row>
    </div>
  </div>
);
