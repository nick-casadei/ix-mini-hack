import { ContentGroup } from "../atoms";
import styled from "styled-components";

const TextContainer = styled("div")`
  color: white;
`;

const Home = () => (
  <TextContainer>
    <h1>Welcome to Tixder</h1>

    <ContentGroup spacing="small">
      <p>
        {`Here is an explanation of what this app is for.. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
      </p>
    </ContentGroup>
  </TextContainer>
);

export default Home;
