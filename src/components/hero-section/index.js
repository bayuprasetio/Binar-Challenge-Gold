import React from "react";
import "./style.css";
import car from "./assets/img_car.svg";
import Button from "../button";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Button href="http://" className="btn btn-success">
                Mulai Sewa Mobil
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-thumbnail">
        <img src={car} alt="img-car" />
      </div>
    </section>
  );
};

export default Hero;
