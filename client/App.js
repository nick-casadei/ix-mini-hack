import { hot } from "react-hot-loader/root";
import { Main } from "./components/atoms";
import StyleWrapper from "./StyleWrapper";
import Routes from "./Routes";
import TixnerLayout from "./components/pages/tixnerLayout";

const App = () => (
  <StyleWrapper>
    <TixnerLayout>
      <Routes />
    </TixnerLayout>
  </StyleWrapper>
);

export default hot(App);
