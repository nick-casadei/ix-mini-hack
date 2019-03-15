import { hot } from "react-hot-loader/root";
import StyleWrapper from "./StyleWrapper";
import Routes from "./Routes";
import styled from "styled-components";

const StyledBackground = styled("html")`
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
`;

const App = () => (
  <StyleWrapper>
    <StyledBackground>
      <Routes />
    </StyledBackground>
  </StyleWrapper>
);

export default hot(App);
