import "./App.css";
import { Form } from "../components/Form/Form";
import ImageComponent from "../components/ImageC/ImageC";
function App() {
  const imageSrc = "/images/contact-form-bg.png";
  return (
    <div>
      <div id="center-container">
        <div id="image-aside">
          <ImageComponent src={imageSrc} />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
