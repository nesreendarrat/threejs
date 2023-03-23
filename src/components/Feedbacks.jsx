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
          <img src="/src/assets/images/IMG_47702.JPG" />
          <div className="myCarousel">
            <h3>Mohamed Alhamshri</h3>
            <h4>CEO of Saver co for cyber security</h4>
            <p>
            Working with Nesreen has been a game changer for our online presence, her skills and expertise in web developmennt have truly elevated our website.
            </p>
          </div>
        </div>

        <div>
          <img src="/src/assets/images/7822B1AF-76A4-4465-8322-F3534C673378_1_201_a.jpeg" />
          <div className="myCarousel">
            <h3>Hussen Shambesh</h3>
            <h4>Technical Director</h4>
            <p>
            I highly recommend Nesreen for any front-end development project. Her skills, work ethic, and communication abilities make her an asset to any team. She is a joy to work with and a valuable member of any project.
            </p>
          </div>
        </div>

        <div>
          <img src="/src/assets/images/1673081065560.jpeg" />
          <div className="myCarousel">
            <h3>Ahmed Awji</h3>
            <h4>software engineer</h4>
            <p>
            Always eager to develop herself, ambitious and delivers tasks requirements on time.
            </p>
          </div>
        </div>

        <div>
          <img src="/src/assets/images/IMG_32332.JPG" />
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


