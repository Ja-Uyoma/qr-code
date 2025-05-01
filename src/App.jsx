import qrcode from "./assets/image-qr-code.png";
import "./App.css";

export default function App() {
  return (
    <main>
      <figure>
        <img src={qrcode} alt="A QR Code that links to frontendmentor.io" />
      </figure>
      <section>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}
