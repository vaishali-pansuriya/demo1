import React from "react";
// import { FaPaperPlane } from "react-icons/fa";
import {
  Carousel,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  CardGroup,
} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutters py-1 main_header">
          <div className="col-xl-4 d-flex justify-content-center">
            <i class="bi bi-telephone-fill icon"></i>
            <p className="contact_info">+ 1235 2355 98</p>
          </div>
          <div className="col-xl-4 d-flex justify-content-center">
            {/* <FaPaperPlane className="icon" /> */}
            <p>YOUREMAIL@EMAIL.COM</p>
          </div>
          <div className="col-xl-4">
            <p>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</p>
          </div>
        </div>
      </div>

      {/* link navigation */}
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#dbffa8" }}>
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            Vegefoods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Shop</Nav.Link>
              <NavDropdown title="Blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Blog</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Conatct</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* carosol slider */}
      <Carousel fade>
        <Carousel.Item className=" active">
          <img
            className="d-block w-100"
            src={require("../img/bg_1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>100% Fresh & Organic Foods</h3>
            <p>We deliver organic vegetables & fruits</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/bg_2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>We serve Fresh Vegestables & Fruits</h3>
            <p>We deliver organic vegetables & fruits</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../img/bg_3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We serve Fresh Vegestables & Fruits</h3>
            <p>We deliver organic vegetables & fruits</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* section icon */}
      <div className="container spacerTop">
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
        <div className="container">
          <CardGroup className="m-4">
            <Card className="m-4">
              <Card.Img variant="top" src={require("../img/product-1.jpg")} />
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
              <Card.Img variant="top" src={require("../img/product-2.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4">
              <Card.Img variant="top" src={require("../img/product-3.jpg")} />
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
              <Card.Img variant="top" src={require("../img/product-4.jpg")} />
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
              <Card.Img variant="top" src={require("../img/product-5.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-4">
              <Card.Img
                variant="top"
                src={require("../img/product-6.jpg")}
                height=""
              />
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
                  $85.99
                  <span>
                    <strike>$95.86</strike>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food3.jpg")} />
              <Card.Body>
                <Card.Title>Organic</Card.Title>
                <Card.Text>Fresh food</Card.Text>
                <Card.Text>
                  $85.99
                  <span>
                    <strike>$95.86</strike>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={require("../img/food4.jpg")} />
              <Card.Body>
                <Card.Title>Organic</Card.Title>
                <Card.Text>Fresh food</Card.Text>
                <Card.Text>
                  $85.99
                  <span>
                    <strike>$95.86</strike>
                  </span>
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
      {/* footer */}
      <div class="container-fluid bg-light">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top background_ft">
          <div class="col mb-3 mx-5">
            <a
              href="/"
              class="d-flex align-items-center mb-3  text-decoration-none"
            >
              {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
              <img
                alt="Best Web Design Institute in Surat"
                title="Best Web Design Institute in Surat"
                src={require("../img/logo_veg.webp")}
                class="w-75"
              ></img>
            </a>
            <p>Vegefoods</p>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>

          <div class="col mb-3 mx-5">
            <h5>Menu</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Shop</li>
              <li class="nav-item mb-2">About Us</li>
              <li class="nav-item mb-2">Jurnal</li>
              <li class="nav-item mb-2">Contact us</li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Help</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Shiping Information</li>
              <li class="nav-item mb-2">Returns and Exchange</li>
              <li class="nav-item mb-2">Tearms and Condition</li>
              <li class="nav-item mb-2">Privacy Policy</li>
              <li class="nav-item mb-2">FAQs</li>
              <li class="nav-item mb-2">Conatact</li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5>Have A Questions?</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li class="nav-item mb-2">
                <h6>+2 392 3929 210</h6>
              </li>
              <i class="fa-solid fa-envelope icon_email">info@yourdomail.com</i>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
