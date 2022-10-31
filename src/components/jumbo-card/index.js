import React from "react";
import Button from "../button";
import "./style.css";

const JumboCard = () => {
  return (
    <div id="jumbocard">
      <div className="Container">
        <div className="col-lg-12">
          <div className="card1">
            <div className="card-jumbo">
              <h2 className="card-title1">Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p className="card-text1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="button-card">
                <Button>Mulai Sewa Mobil</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboCard;
