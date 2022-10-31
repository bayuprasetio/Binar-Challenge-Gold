import React from "react";
import "./style.css";
import img_service from "./assets/img_service.svg";
import check from "./assets/check.svg";

const OurService = () => {
  return (
    <div id="our-service">
      <div className="container isi-service">
        <div className="row">
          <div className="col-lg-6">
            <img className="girl" src={img_service} alt="img_service" />
          </div>
          <div className="col-lg-5">
            <h2 className="serviceHead2">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h2>
            <p className="serviceText2">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="serviceli">
              <img className="serviceItem" src={check} alt="check"></img> Sewa
              Mobil Dengan Supir di Bali 12 Jam
            </div>
            <div className="serviceli">
              <img className="serviceItem" src={check} alt="check"></img> Sewa
              Mobil Lepas Kunci di Bali 24 Jam
            </div>
            <div className="serviceli">
              <img className="serviceItem" src={check} alt="check"></img> Sewa
              Mobil Jangka Panjang Bulanan
            </div>
            <div className="serviceli">
              <img className="serviceItem" src={check} alt="check"></img> Gratis
              Antar - Jemput Mobil di Bandara
            </div>
            <div className="serviceli">
              <img className="serviceItem" src={check} alt="check"></img>{" "}
              Layanan Airport Transfer / Drop In Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
