import { hot } from "react-hot-loader/root";
import StyleWrapper from "./StyleWrapper";
import Routes from "./Routes";

const App = () => (
  <StyleWrapper>
    <Routes />
  </StyleWrapper>
);

export default hot(App);
