import { ContentGroup } from "../atoms";

// const ClockLoadable = Loadable({
//   loader: () =>
//     import("../code-split/Clock" /* webpackChunkName: 'component__clock' */),
//   loading: Loading
// });

const Home = () => (
  <div>
    <h1>Home page</h1>

    <ContentGroup spacing="small">
      <h2>Random number component:</h2>
      <p>
        {`Note that the random number is generated twice - once on the server
        render and again when the client 'hydrates' the window:`}
      </p>
    </ContentGroup>
  </div>
);

export default Home;
