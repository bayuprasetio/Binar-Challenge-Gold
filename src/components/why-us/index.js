import React from "react";
import iconComplete from "./assets/icon_complete.svg";
import iconPrice from "./assets/icon_price.svg";
import iconClock from "./assets/icon_24hrs.svg";
import iconProfessional from "./assets/icon_professional.svg";
import "./style.css";

const WhyUs = () => {
  return (
    <>
      <div id="WhyUs">
        <div className="container">
          <div className="row tulisan-judul">
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div className="col-lg-3 col-md-6 col-md-6">
              <div className="card">
                <div className="card-body card-why">
                  <img src={iconComplete} className="img-icon" alt="gambar" />
                  <h4 className="card-title">Mobil Lengkap</h4>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src={iconPrice} className="img-icon" alt="gambar" />
                  <h4 className="card-title">Harga Murah</h4>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src={iconClock} className="img-icon" alt="gambar" />
                  <h4 className="card-title">Layanan 24 Jam</h4>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img
                    src={iconProfessional}
                    className="img-icon"
                    alt="gambar"
                  />
                  <h4 className="card-title">Sopir Profesional</h4>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
