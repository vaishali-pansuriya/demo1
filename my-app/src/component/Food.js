import React from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { Fa500Px } from "react-icons/fa";

export default function For() {
  return (
    <div>
      <div className="FcDatabase"></div>
      <Navbar className="bg-dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className="text-warning">
            Home 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="text-warning">
                Menu
              </Nav.Link>
              <Nav.Link href="#action2" className="text-warning">
                Block
              </Nav.Link>
              <Nav.Link href="#" className="text-warning">
                Gallary
              </Nav.Link>
              <Nav.Link href="#" className="text-warning">
                Pages
              </Nav.Link>
              <Nav.Link href="#" className="text-warning">
                Contact us
              </Nav.Link>
              <Nav.Link href="#" className="text-warning">
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="text-warning">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* // slider */}
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement src={require("../img/sfood1.png")} alt="..." />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={require("../img/sfood2.jpg")} alt="..." />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={require("../img/sfood3.jpg")} alt="..." />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      {/* card item */}
      <div className="container">
        <div className="row bg-light">
          <div className="col-xl-6">
            <div>
              <div>
                <p className="about_p">WELCOME TO WARITH COMPANY</p>
                <h1 className="about_h1">
                  We Provide For Health High Quilty Food In Service 5 Years.
                </h1>
                <p className="lorem_p">
                  Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed
                  eiusmod tempor sit amet elit dolor sit amet elit.Lorem ipsum
                  dolor sit amet elit , consectetur adipiscing , sed eiusmod
                  tempor sit amet elit.
                </p>
              </div>
              <div>
                <div>
                  <p className="about_p">Natural Food</p>
                  <p className="lorem_p">
                    Lorem ipsum dolor sit amet elit , consectetur adipiscing ,
                    sed eiusmod tempor sit amet elit Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div>
                  <p className="about_p">High Quilty Food</p>
                  <p className="lorem_p">
                    Lorem ipsum dolor sit amet elit , consectetur adipiscing ,
                    sed eiusmod tempor sit amet elit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src={require("../img/about.jpg")}
              className="image_about"
            ></img>
          </div>
        </div>
      </div>
      <div className="color">
        <div className="container">
          <div className="text-center spacerTop">
            <div className="row ">
              <div className="about_p">
                <p>OUR SERVICE</p>
              </div>
              <div>
                <h1 className="about_h1">What We Do</h1>
                <p className="lorem_p">
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical at Hampden-Sydney College.
                </p>
              </div>
            </div>  
          </div>
        </div>
        <CardGroup className="m-4">
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card1.jpg")} />
            <Card.Body>
              <Card.Title>Organic food</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card2.jpg")} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card3.jpg")} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup className="m-4">
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card1.jpg")} />
            <Card.Body>
              <Card.Title>Organic food</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card2.jpg")} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-4">
            <Card.Img variant="top" src={require("../img/card3.jpg")} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      {/* card content */}

      {/* some product */}
      <div className="color1">
        <div className="container">
          <div className="text-center spacerTop">
            <div className="row ">
              <div className="about_p">
                <p>SOME PRODUCT</p>
              </div>
              <div>
                <h1 className="about_h1">Organic Products</h1>
                <p className="lorem_p">
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical at Hampden-Sydney College.
                </p>
              </div>
            </div>
          </div>
          <CardGroup className="m-4">
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food1.jpg")} />
              <Card.Body className="text-center">
                <Card.Title>Organic</Card.Title>
                <Card.Text>Fresh food</Card.Text>
                <Card.Text>
                  $85.99{" "}
                  <span>
                    <strike>$95.86</strike>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food2.jpg")} />
              <Card.Body className="text-center">
                <Card.Title>Organic</Card.Title>
                <Card.Text>Fresh food</Card.Text>
                <Card.Text>
                  $85.99{" "}
                  <span>
                    <strike>$95.86</strike>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food3.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food4.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>

      {/* contcat info.. */}
      <div className="container">
        <div className="text-center spacerTop">
          <div className="row ">
            <div className="about_p">
              <p>OUR FARMER</p>
            </div>
            <div>
              <h1 className="about_h1">Meet Farmer</h1>
              <p className="lorem_p">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical at Hampden-Sydney College.
              </p>
            </div>
          </div>
        </div>
        <CardGroup className="m-4">
          <Card className="m-2">
            <Card.Img variant="top" src={require("../img/farmer1.jpg")} />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={require("../img/farmer2.jpg")} />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={require("../img/farmer3.jpg")} />
          </Card>
          <Card className="m-2">
            <Card.Img variant="top" src={require("../img/farmer4.jpg")} />
          </Card>
        </CardGroup>
      </div>
      {/* start newslatter */}
      
          
    </div>
  );
}
