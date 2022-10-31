import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/laki.svg";
import img2 from "./assets/perempuan.svg";
import rate from "./assets/Rate.svg";
import left from "./assets/Leftbutton.png";
import right from "./assets/Rightbutton.png";
import { Card, Row, Col } from "react-bootstrap";
import "./style.css";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      autoplay: false,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };

    return (
      <div id="Testimonial">
        <div className="judul-1">Testimonial</div>
        <div className="keterangan-1">
          Berbagai review positif dari para pelanggan kami
        </div>
        <div className="container">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <Row className="justify-content-md-center">
              <Col lg={12}>
                <Card className="card-testi">
                  <Card.Body className="body-testi">
                    <div className="col-md-2">
                      <div className="card_kiri">
                        <img src={img2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-10 ">
                      <div className="card_kanan">
                        <div className="faq-icon">
                          <img src={rate} alt="" />
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet"
                        </p>
                        <p>John, Bromo</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img2} alt="" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img1} alt="" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Body className="body-testi">
                    <div className="card_kiri">
                      <img src={img1} alt="" />
                    </div>
                    <div className="card_kanan">
                      <div className="faq-icon">
                        <img src={rate} alt="" />
                      </div>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet"
                      </p>
                      <p>John, Bromo</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Slider>
          <div className="btnprevnext">
            <button className="btnprev">
              <img src={left} alt="" onClick={this.previous} />
            </button>
            <button className="btnnext">
              <img src={right} alt="" onClick={this.next} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
