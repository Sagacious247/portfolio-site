import loaderImg from "../../assets/spinner.jpg";
import ReactDOM from "react-dom";
import './loader.css'

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img className="loaderImg" src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;