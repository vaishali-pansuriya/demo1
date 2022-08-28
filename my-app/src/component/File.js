import React from "react";

export default function () {
  return (
    <div>
      <div>
        <div>
          <div className="main_header">
            <div className="container">
              <div className="sub_header">
                <div>
                  <span>info@gmail.in</span>
                </div>
                <div>
                  <span>Verify Certificate</span>
                </div>
                <div>
                  <span>Have a Any Question?+91 90333 16003 </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="container">
              <div className="menu_header">
                <div className="img_menu">
                  <img
                    class="logo_dark"
                    src="https://www.cdmi.in/assets/front/images/creative-logo-blue.svg"
                    alt="Creative Design &amp; Multimedia Institute"
                    title="Creative Design &amp; Multimedia Institute"
                  ></img>
                </div>
                <div class="header_link">
                  <nav>
                    <a href="#">HOME</a>
                    <a href="#">COURSE</a>
                    <a href="#">COLLEGECOURSE</a>
                    <a href="#">ACTIVITIES</a>
                    <a href="#">BLOG</a>
                    <a href="#">KNOWNUS</a>
                    <a href="#">GETINTOUCH</a>
                    <a href="#">STUDENTJONE</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="slider"></div>
          </div>
          <div className="spacerTop">
            <div className="content">
              <center>CREATIVE COURSE</center>
              <h1 className="content_h1">OFFERED COURSE</h1>
            </div>
          </div>
          {/* card view */}

          <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider1.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">Multimedia courses</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider2.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">UI/UX & Graphics Design</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider3.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">Programming IT</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider4.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">Multimedia courses</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider5.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">UI/UX & Graphics Design</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={require("../img/slider1.jpg")} height="250"></img>
                  <div class="card-body">
                    <h5 class="card-title">Programming IT</h5>
                    <a>
                      <button className="button">Know More!!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------View All Course Button---------- */}
          <br></br>
          <br></br>
          <br></br>
          <div className="container">
            <center>
              <button className="btn_course">View All Courses</button>
            </center>
          </div>
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  src={require("../img/about_us.jpg")}
                  class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                ></img>
              </div>
              <div class="col-lg-6">
                <h5 class="about_us fw-bold lh-1 mb-3">About us</h5>
                <p class="content_p">
                  IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!
                </p>
                <p class="lead">
                  Creative Design & Multimedia Institute(CDMI) is a reputed
                  training institute in Surat for web design, Game design,Mobile
                  App Development, Game Development ,Video Editing & All types
                  of IT Courses with 8 years of full-fledged, result-oriented
                  training experience. We stepped in the market in 2014 with the
                  goal to help students, working professionals and other
                  interested candidates get that dream job or open that desired
                  freelance business in some of the most popular Computer / IT
                  fields. Our aim is to ease the hiring process for businesses
                  and organizations by providing work-ready professionals who
                  can contribute greatly to their success.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn_course">
                    Enroll Now!!!
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Student corner */}
          <div className="student_img">
            <img
              src={require("../img/student_corner.jpg")}
              height="230"
              width="1260"
            ></img>
          </div>
          <div class="container">
            <div className="main_student">
              <div className="sub_student">
                <div className="student">
                  <h2 class="counter_text">
                    <span class="counter">8000</span>+
                  </h2>
                  <p class="text-uppercase font-weight-bold">HAPPY STUDENTS</p>
                </div>
                <div className="student">
                  <h2 class="counter_text">
                    <span class="counter">10</span>+
                  </h2>
                  <p class="text-uppercase font-weight-bold">
                    CERTIFICATION APPROVAL
                  </p>
                </div>
                <div className="student">
                  <h2 class="counter_text">
                    <span class="counter">60</span>+
                  </h2>
                  <p class="text-uppercase font-weight-bold">
                    Certified teachers
                  </p>
                </div>
                <div className="student">
                  <h2 class="counter_text">
                    <span class="counter">4000</span>+
                  </h2>
                  <p class="text-uppercase font-weight-bold">Students Placed</p>
                </div>
              </div>
            </div>
          </div>
          {/* Happy student */}
          <div class="container">
            <div class="container col-xxl-8 px-4 py-5">
              <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                  <img
                    src={require("../img/hstudent.jpg")}
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="700"
                    height="500"
                    loading="lazy"
                  ></img>
                </div>
                <div class="col-lg-6">
                  <h5 class="happy_h5 lh-1 mb-3">HAPPY STUDENT </h5>
                  <p class="happy_p">ALUMNI SPEAK</p>
                  <p class="lead">
                    I’ve completed Graphics Design Course in Creative Design
                    &amp; Multimedia Institute(CDMI). Creative Design &amp;
                    Multimedia Institute(CDMI) is an excellent place, where we
                    can grow in our life. The way faculties teach is remarkable.
                    It’s the best place to learn. Thanks to Creative Design
                    &amp; Multimedia Institute(CDMI)!
                  </p>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <img
                      src={require("../img/student1.jpg")}
                      height="100"
                      width="100"
                      class="rounded-circle"
                    ></img>
                    <span class="pt-4 ps-3">Ankit Balar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* why choose creative.. */}
          <div>
            <center>
              <h5>READ OUR DIFFERENCE</h5>
            </center>
          </div>
          <div>
            <center>
              <h1>WHY CHOOSE CREATIVE</h1>
            </center>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src={require("../img/slider1.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle mx-auto"
                  ></img>
                  <div class="card-body">
                    <h3 className="why_h5">Industry Experts As Trainers</h3>
                    <p className="why_p">
                      Our trainers have 5+ years of industry experience coupled
                      with extensive research and analysis.ur trainers have 5+
                      years of industry experience coupled with extensive
                      research and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card mt-4">
                  <img
                    src={require("../img/slider2.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle mx-auto"
                  ></img>
                  <div class="card-body">
                    <h2 className="why_h5">Latest Curriculum</h2>
                    <p className="why_p">
                      We Provides which designed in such a way that Students
                      will get full knowledge within a short time.ur trainers
                      have 5+ years of industry experience coupled with
                      extensive research and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src={require("../img/slider3.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle m-3 mx-auto"
                  ></img>
                  <div class="card-body">
                    <h2 className="why_h5">Latest Technology</h2>
                    <p className="why_p">
                      We strive to let you have a solid foundational knowledge
                      of technologies shaping the IT World today.ur trainers
                      have 5+ years of industry experience coupled with
                      extensive research and analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card text-center">
                  <img
                    src={require("../img/slider4.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle mx-auto"
                  ></img>
                  <div class="card-body">
                    <h3 className="why_h5">Industry Experts As Trainers</h3>
                    <p className="why_p">
                      Our trainers have 5+ years of industry experience coupled
                      with extensive research and analysis.ur trainers have 5+
                      years of industry experience coupled with extensive
                      research and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src={require("../img/slider2.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle mx-auto"
                  ></img>
                  <div class="card-body">
                    <h2 className="why_h5">Latest Curriculum</h2>
                    <p className="why_p">
                      We Provides which designed in such a way that Students
                      will get full knowledge within a short time.ur trainers
                      have 5+ years of industry experience coupled with
                      extensive research and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src={require("../img/slider.jpg")}
                    height="150px"
                    width="150px"
                    class="rounded-circle mx-auto"
                  ></img>
                  <div class="card-body">
                    <h2 className="why_h5">Latest Technology</h2>
                    <p className="why_p">
                      We strive to let you have a solid foundational knowledge
                      of technologies shaping the IT World today.ur trainers
                      have 5+ years of industry experience coupled with
                      extensive research and analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider2 */}
          <div class="container">
            <div className="spacerTop">
              <center>
                <h4 className="studentplc">STUDENT PLACEMENT</h4>
              </center>
              <center>
                <h1 className="studentrec">OUR RECRUITMENT PARTNERS</h1>
              </center>
            </div>
            <div className="main_img">
              <div className="img">
                <img
                  src={require("../img/slider.jpg")}
                  height="150"
                  width="250"
                ></img>
              </div>
              <div className="img">
                <img
                  src={require("../img/slider1.jpg")}
                  height="150"
                  width="250"
                ></img>
              </div>
              <div className="img">
                <img
                  src={require("../img/slider2.jpg")}
                  height="150"
                  width="250"
                ></img>
              </div>
              <div className="img">
                <img
                  src={require("../img/slider3.jpg")}
                  height="150"
                  width="250"
                ></img>
              </div>
              <div className="img">
                <img
                  src={require("../img/slider4.jpg")}
                  height="150"
                  width="250"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
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
                src="https://www.cdmi.in/assets/front/images/creative-logo-white.svg"
                class="w-75"
              ></img>
            </a>
            <p>
              Creative Design and Multimedia Institute is leading computer
              training institute in surat. We offers government approved
              computer training courses in Surat.
            </p>
          </div>

          <div class="col mb-3 mx-5">
            <h5>Features Like</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">About Us</li>
              <li class="nav-item mb-2">Blog</li>
              <li class="nav-item mb-2">Join Us</li>
              <li class="nav-item mb-2">Company Login</li>
              <li class="nav-item mb-2">Certificate Verificaton</li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>TRENDY COURSES</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Unity 3D Course Training</li>
              <li class="nav-item mb-2">Python Course Training</li>
              <li class="nav-item mb-2">Node Js Training</li>
              <li class="nav-item mb-2">Angular Js Training</li>
              <li class="nav-item mb-2">React Course Training</li>
              <li class="nav-item mb-2">Ethical Haking Course Training</li>
              <li class="nav-item mb-2">React Native Course Training</li>
              <li class="nav-item mb-2">Desktop App Development</li>
              <li class="nav-item mb-2">
                Advance Aps.net Development Course Training
              </li>
            </ul>
          </div>
          <div class="col mb-3">
            <h5>OUR BRANCHES</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <h6>HEAD OFFICE YOGICHOK</h6>
              </li>
              <li class="nav-item mb-2">
                401-404, 4th Floor, City Center Complex, Nr. Yogichowk,
                Varachha, Surat Mo : +91 90333 16003,
              </li>
              <li class="nav-item mb-2">
                <h6>BRANCH-1 KATARGAM</h6>
              </li>
              <li class="nav-item mb-2">
                327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, Katargam,
                Surat Mo : +91 90 3333 5009
              </li>
              <li class="nav-item mb-2">
                <h6>BRANCH-2 MOTA VARACHHA</h6>
              </li>
              <li class="nav-item mb-2">
                B 201-203, 2nd Floor, Aditya Complex, VIP Circle, Utran Mota
                Varachha,Surat Mo : +91 945 945 9673
              </li>
              <li class="nav-item mb-2">
                <button class="btn_course">Get Virtual Tour</button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
        <div className="footer_color">
          <p>
            @ 2022 All Rights Reserved by Creative Design & Multimedia
            Institute..
          </p>
      </div>
    </div>
  )
}
