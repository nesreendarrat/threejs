import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQEfgQqH1wMLlg/profile-displayphoto-shrink_400_400/0/1670364789479?e=1684972800&v=beta&t=G3tFk2kHNEqaWIy3e97NaiqLeWXFVxmN5OF2FJ2KeBE" />
          <div className="myCarousel">
            <h3>Mohamed Alhamshri</h3>
            <h4>CEO of Saver co for cyber security</h4>
            <p>
            Working with Nesreen has been a game changer for our online presence, her skills and expertise in web developmennt have truly elevated our website.
            </p>
          </div>
        </div>

        <div>
          <img src="https://media.licdn.com/dms/image/D4E03AQHOOw47th-0CQ/profile-displayphoto-shrink_800_800/0/1678178960545?e=2147483647&v=beta&t=8qB8lcMDhXvWiUvcbmwPgcth3FOGw5oamV2cNjDUKqc" />
          <div className="myCarousel">
            <h3>Hussen Shambesh</h3>
            <h4>Technical Director</h4>
            <p>
            I highly recommend Nesreen for any front-end development project. Her skills, work ethic, and communication abilities make her an asset to any team. She is a joy to work with and a valuable member of any project.
            </p>
          </div>
        </div>

        <div>
          <img src="https://media.licdn.com/dms/image/D4E03AQHUv8RaQb64tA/profile-displayphoto-shrink_800_800/0/1673081065560?e=2147483647&v=beta&t=Ud-a5Rz5FwIa03FAyhLmC8EawGP8QkEJT5lCsPQOoK0" />
          <div className="myCarousel">
            <h3>Ahmed Awji</h3>
            <h4>software engineer</h4>
            <p>
            Always eager to develop herself, ambitious and delivers tasks requirements on time.
            </p>
          </div>
        </div>

        <div>
          <img src="https://media.licdn.com/dms/image/C4D22AQEUeMDfsMKqQw/feedshare-shrink_800/0/1679587771009?e=1682553600&v=beta&t=8fwZk9d2zbe4NES-rOtbuG_2No1C4mwunkHt9zQvjAg" />
          <div className="myCarousel">
            <h3> zyad shadi</h3>
            <h4>crisis management director at astro</h4>
            <p>
            I've worked alongside Nesreen in our crypto exchange company & I can confidently say that she is a valuable asset to our team. Her expertise in the industry & dedication to providing exceptional help, support & inspiration is unmatched.
            </p>
          </div>
        </div>
      
      </Carousel>
    );
  }
}


