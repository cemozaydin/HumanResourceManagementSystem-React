import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "typeface-roboto";
import Footer from "./layouts/Footer";
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
