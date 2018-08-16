import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { page1 } from './data';

export default function Page1() {
  const children = page1.map((card, i) => (
    <Col className="card-wrapper" key={i} md={8} xs={24}>
      <a className="card" href={card.href}>
        <h3>{card.title}</h3>
        <img src={card.img} alt="" className="card-img-top" />
        <div className="card-body">
          <span className="title">{card.title}</span>
          <span className="description text-secondary">{card.description}</span>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </a>
    </Col>
  ));

  return (<section className="page-wrapper page1">
    <a id="__products"></a>
    <QueueAnim
      component={Row}
      type="bottom"
      className="page row text-center"
      delay={500}
    >
      {children}
    </QueueAnim>
  </section>);
}