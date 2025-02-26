import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header.component.jsx";
import Footer from "./components/common/Footer.component.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
