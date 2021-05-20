import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src=""
            class="pr-4 pb-3 img-fluid"
            alt="Kathy Rodriguez"
          />
          <h4>
            Please feel free to contact me at any time and if I do not
            immediately respond I will respond within the next buisness day.
            Thank you!
          </h4>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:katrrodriguez26@gmail.com">
            <MDBIcon icon="envelope" /> katrrodriguez26@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;