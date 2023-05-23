import React, { useEffect, useState } from "react";
import { Modal, ModalBody, Row } from "reactstrap";
import heroImg from "../../assets/alok.jpeg";
import "./Hero.css";

const Hero = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [des, setDes] = useState("");

  useEffect(() => {
    const { contract } = state;
    const des = async () => {
      const desText = await contract.methods.description().call();
      setDes(desText);
    };
    contract && des();
  }, [state]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <p>
            <span>Alok </span>
            Full-Stack Blockchain Developer From India.
          </p>
          <h1>I develop decentralised apps in web3 space.</h1>
          <h3>{des}</h3>
          {/*  =========popup bootstrap==========  */}

          <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <Row className="text-align">
                <label htmlFor="" toggle={() => setModal(!modal)}>
                  Mail Id -alokkpsingh123@gmail.com
                </label>
              </Row>
            </ModalBody>
          </Modal>

          <button className="msg-btn" onClick={() => setModal(true)}>
            Get in Touch
          </button>
          {/*  =========popup bootstrap end==========  */}
        </div>
        <div className="hero-img">
          <div className="img-container">
            <img src={heroImg} alt="profilePhoto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
