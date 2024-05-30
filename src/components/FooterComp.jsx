import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterComp = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between flex items-center sm:flex  sm:items-center sm:justify-between">
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        {/* <FooterDivider /> */}
        {/* <FooterCopyright href="#" by="Flowbite™" year={2022} /> */}
      </div>
    </Footer>
  );
};

export default FooterComp;
