import { Button, Footer } from "flowbite-react";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import Products from "./components/Cart/Products";
import Container from "./utils/Container";
export default function App() {
  return (
    <Container>
      <NavbarComp />
      <Products />
      <FooterComp />
    </Container>
  );
}
