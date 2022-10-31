import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { queryData, currencyFormat } from "../../helper";
import { Container } from "react-bootstrap";
import { ColorRing } from "react-loader-spinner";
import Hero from "../../components/hero-section";
import placeholderCar from "./assets/placeholderCar.png";
import NoCar from "./assets/noCar.png";
import "./style.css";

function CariMobil() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyData, setEmptyData] = useState(false);

  const baseUrl = "https://bootcamp-rent-cars.herokuapp.com/customer";

  const getCars = () => {
    Axios.get(`${baseUrl}/car`)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const fetch = useRef(true);

  useEffect(() => {
    if (fetch.current) {
      getCars();
      fetch.current = false;
    }
  }, []);

  const carName = useRef("");
  const carCategory = useRef("");
  const carHarga = useRef("");
  const statusOrder = useRef("");

  const price = () => {
    switch (carHarga.current.value) {
      case "small":
        return { maxPrice: 400000 };
      case "medium":
        return { minPrice: 400000, maxPrice: 600000 };
      case "large":
        return { minPrice: 600000 };
      default:
        return "";
    }
  };

  const getData = (e) => {
    e.preventDefault();

    const params = {
      name: carName.current.value,
      category: carCategory.current.value,
      minPrice: price().minPrice,
      maxPrice: price().maxPrice,
      isRented: statusOrder.current.value,
    };

    setLoading(true);
    setEmptyData(false);
    setCars([]);

    Axios.get(`${baseUrl}/v2/car?${queryData(params)}`)
      .then((response) => {
        if (response.data.cars.length > 0) {
          setCars(response.data.cars);
        } else {
          setEmptyData(true);
        }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Hero />
      <Container className="content ">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12">
              <form className="row g-3 content-search" onSubmit={getData}>
                <div className="col-md-10 search">
                  <div className="col-md-3 kolom-search">
                    <label htmlFor="input" className="form-label">
                      Nama Mobil
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ketik nama/tipe mobil"
                      ref={carName}
                    />
                  </div>
                  <div className="col-md-3 kolom-search">
                    <label className="form-label">Kategori</label>
                    <select
                      className="form-select"
                      name="state"
                      ref={carCategory}
                    >
                      <option value="">Masukan Kapasitas Mobil</option>
                      <option value="small">2 - 4 orang</option>
                      <option value="medium">4 - 6 orang</option>
                      <option value="large">6 - 8 orang</option>
                    </select>
                  </div>
                  <div className="col-md-3 kolom-search">
                    <label className="form-label">Harga </label>
                    <select className="form-select" name="state" ref={carHarga}>
                      <option value="">Masukan Harga Sewa per Hari</option>
                      <option value="small"> {"< Rp. 400.000"} </option>
                      <option value="medium">
                        {" "}
                        Rp. 400.000 - Rp. 600.000{" "}
                      </option>
                      <option value="large"> {"> Rp. 600.000"} </option>
                    </select>
                  </div>
                  <div className="col-md-3 kolom-search">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="state"
                      ref={statusOrder}
                    >
                      <option value="">Status Sewa</option>
                      <option value="true">Tersedia</option>
                      <option value="false">Disewa</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 tombol-search">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-success mt-4">
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      {loading ? (
        <div className="ColorRing-loading">
          <ColorRing
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-lines-loading"
            strokeWidth="5"
            animationDuration="0.75"
            visible={true}
          />
        </div>
      ) : (
        <div className="card-data">
          <div className="container">
            <div className="card-data-mobil">
              <div className="row baris-mobil">
                {cars.map((car, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 border-mobil" key={index}>
                      <div className="card-border">
                        <div className="card">
                          <img
                            src={
                              car.image !== null ? car.image : placeholderCar
                            }
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{car.name}</h5>
                            <h4 className="price">
                              Rp {currencyFormat(car.price)} / hari
                            </h4>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.{" "}
                            </p>
                            <Link
                              className="btn btn-primary"
                              to={`/cari-mobil/${car.id}`}
                            >
                              Pilih Mobil
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {emptyData && (
        <div className="noData">
          <img src={NoCar} />
          <h2>MOHON MAAF!</h2>
          <h3>Mobil yang kamu cari tidak ditemukan</h3>
          <h4>"Coba ubah kata kunci atau filter yang kamu gunakan"</h4>
        </div>
      )}
    </>
  );
}

export default CariMobil;
