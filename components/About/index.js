import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src=""
            class="float-left pr-4 pb-3 img-fluid"
            alt="Kathy Rodriguez"
          />
          <p style={{ fontSize: "27px" }}>
          My name is Kathy Rodriguez; I was born and raised in Miami, Florida. I attended the University of Florida and graduated with a Bachelor's Degree in Telecommunications with an outer concentration in Art History. 
          I'm currently attending a Full Stack Web Developer program at the University of Miami. 
          When I am not working or coding, I enjoy reading, biking-riding, and going to the beach.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
