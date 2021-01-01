import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
// assets
import calamari from '../../../assets/calamari.jpg';
import salmon from '../../../assets/salmon.jpg';
import crab from '../../../assets/crab.jpg';
import cornsoup from '../../../assets/cornsoup.jpg';
// styles
import './Specials.css';

const Specials = () => {
  return (
    <>
      <section id="specials" className="specials">
        <div className="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col lg={3}>
              <Nav variant="pills" className="nav nav-tabs flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="nav-link">
                    Fried Calamari
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second" className="nav-link">
                    Crab N Dumplings
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third" className="nav-link">
                    Honey Mustard Salmon
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth" className="nav-link">
                    Corn Soup
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col lg={8}>
                      <h3>Fried Calamari</h3>
                      <p className="font-italic">Serves 4-6</p>
                      <p>
                        Marinating the squid in buttermilk defeats the rubber band effect some fried
                        calamari tends to have. This appetizer is an all time crowd pleaser.
                      </p>
                    </Col>
                    <Col lg={4}>
                      <img src={calamari} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    <Col lg={8}>
                      <h3>Crab N Dumplings</h3>
                      <p className="font-italic">Serves 2</p>
                      <p>
                        Blue crab, cooked down in a curry sauce with coconut milk. Perfectly paired
                        with boiled dumplings.
                      </p>
                    </Col>
                    <Col lg={4}>
                      <img src={crab} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    <Col lg={8}>
                      <h3>Honey Mustard Salmon</h3>
                      <p className="font-italic">Serves 6-8</p>
                      <p>
                        This Honey Mustard Salmon features a homemade honey mustard sauce that is
                        super delicious (and easy to adapt if you like to go heavier on the honey or
                        mustard side).
                      </p>
                    </Col>
                    <Col lg={4}>
                      <img src={salmon} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <Row>
                    <Col lg={8}>
                      <h3>Corn Soup</h3>
                      <p className="font-italic">Serves 6-9</p>
                      <p>
                        A traditional corn soup recipe for this popular Trini street food. Made with
                        split peas, corn and dumplings this soup is commonly an after fete snack
                        especially around carnival time
                      </p>
                    </Col>
                    <Col lg={4}>
                      <img src={cornsoup} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </section>
    </>
  );
};
export default Specials;
