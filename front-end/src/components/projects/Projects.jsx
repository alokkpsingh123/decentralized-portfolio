import React, { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import img from "../../assets/img1.png";
import "./Projects.css";

const Projects = ({state}) => {
  const [modal, setModal] = useState(false);
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    const {contract} = state;
    const projectDetails = async()=>{
        const projects = await contract.methods.allProjects().call();
        setProjects(projects);
        console.log(projects);
    }
    contract && projectDetails();
  },[state])

  return (
    <section className="project-section">
      <h1 className="title">Projects </h1>
      <div className="card-wrapper">
        {projects.map((project) => {
          return (
            <a
              href="#"
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-img">
                <img src={img} alt="" />
              </div>
              <div className="card-text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          );
        })}
      </div>
      {/*  =========popup bootstrap==========  */}

      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form>
            <Row>
              <input id="eth" type="text" />
              <Button className="mt-4">Send</Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>
      {/*  =========popup bootstrap end==========  */}
      <p className="donate" onClick={() => setModal(true)}>
        Liked the dummyValue's ? Consider donating Eth's{" "}
        <FaDonate className="icon" />
      </p>
    </section>
  );
};

export default Projects;
