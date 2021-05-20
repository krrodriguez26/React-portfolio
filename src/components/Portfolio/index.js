import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/krrodriguez26/hori-seon/blob/main/assets/images/homepage.png"
            alt="Horiseon"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Horiseon</MDBCardTitle>
            <MDBCardText>
            A marketing agency needs help refactoring an existing site to make 
            it more accessible, and is optimized for search engines.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/hori-seon"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/krrodriguez26/PasswordGenerator/blob/main/assets/generatingpassword.png"
            alt="Password Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
            A password generator that an employee/organization can use to generate 
            a secure random password bassed on criteria the user has selected.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/PasswordGenerator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://github.com/krrodriguez26/JavaScriptFundamentals/blob/main/assets/Screen%20Shot%202021-01-18%20at%209.28.24%20PM.png"
            alt="JavaScript Quiz"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">JavaScript Quiz</MDBCardTitle>
            <MDBCardText>
            A coding quiz with multiple-choice questions,running counter. 
            Everytime the the question is answered correctly the background of the page 
            will turn green, when answered incorrectly the background will turn red.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/JavaScriptFundamentals"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/krrodriguez26/WeeklyPlanner/blob/main/Assets/Mock%20UP.png"
            alt="Weekly Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weekly Planner</MDBCardTitle>
            <MDBCardText>
            Allows for user to effectively keep track of their time by adding tasks in the planner.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/WeeklyPlanner"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src=""
            alt="ReadMe Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">ReadMe Generator</MDBCardTitle>
            <MDBCardText>
            Create a command line application that dynamically generates a README.md from a user`s input.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/ReadMe_generator"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://github.com/krrodriguez26/Note_Taker/blob/main/Assets/Screenshot%20localhost.png"
            alt="Note Taker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Note Taker</MDBCardTitle>
            <MDBCardText>
            This simple note taking application allows you to write and save notes with a title and plain text.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/Note_Taker"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src="https://github.com/krrodriguez26/ActiveHer/blob/main/Main/public/Assets/Homepage.png"
            alt="ActiveHer"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">ActiveHer</MDBCardTitle>
            <MDBCardText>
            COVID-19 has impacted our day-to-day life and mental well-being. 
            We created an app that creates an empowering and mindful space where women can create 
            activity groups such as; rollerblading, running, biking ect. and meet up at local parks.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/ActiveHer"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src="https://github.com/krrodriguez26/User-Directory/blob/main/assets/EmployeeDirectory.png"
            alt="User-Directory"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">User Directory</MDBCardTitle>
            <MDBCardText>
            This app allows for a user to be able to view my an employee 
            directory at once for quicker access to their information.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/krrodriguez26/User-Directory"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src=""
            alt=""
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5"> </MDBCardTitle>
            <MDBCardText>
           
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;