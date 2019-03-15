import { hot } from "react-hot-loader/root";
import { Nav } from "./components/organisms";
import { Main } from "./components/atoms";
import StyleWrapper from "./StyleWrapper";
import Routes from "./Routes";
import TixnerLayout from "./components/pages/TixnerLayout";

const App = () => (
  <StyleWrapper>
    <Nav />
    <TixnerLayout>
      <Main>
        <Routes />
      </Main>
    </TixnerLayout>
  </StyleWrapper>
);

export default hot(App);
