import "./Contact.css";

const Contact = ({ state }) => {
  return (
    <section className="contact-section">
      <h1 className="title">Interested? Let's Get In Touch!</h1>
      <a
        href="https://ipfs.io/ipfs/QmaSywY1Chx3joG3WKqkS7ebN5bxCSkpsMXMJwbwVBEoHV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="downlodeBTN">View Resume</button>
      </a>
    </section>
  );
};

export default Contact;
