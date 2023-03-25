import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    } from "../assets";

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {

      
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Crypto Content Writer",
      company_name: "Astro",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Researching and publishing daily news for the community members.",
        "Creating educational content for traders and investers in the crytpo market, including topics about the blockchain technology, NFT's and coins analysing. ",
        "Providing strategic insight for a variety of public relations, marketing and internal communications material to create effective and informative content from start to finish.",
        "Participating in national fairs and forums about inforamtion technology .",
      ],
    },
    {
      title: "Web Developing",
      company_name: "Elham Education",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Mar 2022",
      points: [
        "Developing and maintaining two web applications using JavaScript and other related technologies.",
        "Learning in a digital base that provides an interactive educational environment to create leaders in the digital transformation of society through competitions and projects.",
        "Had a special supervisor to follow up my educational process and set my monthly goals.",
        "HTML, CSS, JavaSript.",
      ],
    },
    {
      title: "Mobile App Developing",
      company_name: "LATI Bootcamp",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Present 2023",
      points: [
        "Using kotlin for building Android apps.",
        "Collaborating with teams including designers, product managers, and other developers to create high-quality products.",
        "Designing UI/UX for mobile apps using Figma.",
        "Building cross-platform Medical mobile application using flutter.",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "HKS",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js. ",
        "Collaborating with the company team while working on different tasks",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Javascript, React js, Typescript."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Nesreen has been a game changer for our online presence, her skills and expertise in web developmennt have truly elevated our website.",
      name: "Mohamed Alhamshri",
      designation: "Founder of",
      company: " Saver co for cyber security",
      image: "/src/constants/IMG_47702.JPG",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Hassan Shembesh",
      designation: "CEO",
      company: " of HKS IT",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Always eager to develop herself, ambious and delivers tasks requirements on time.",
      name: "Ahmed Awji",
      designation: "Software Engineer",
      company: "",
      image:"/src/constants/1673081065560.jpeg"
    },
    
  ];
  
const projects = [
    {
    name: "Nesreen's Advice",
    description:
        "A react website for a different and new advice each time you tap, focused more on the api and the css of the poject, tailwind css framewrok was used for the styling .",
    tags: [
        {
        name: "reactjs",
        color: "blue-text-gradient",
        },
        {
        name: "tailwind",
        color: "green-text-gradient",
        },
        {
        name: "RestAPI",
        color: "pink-text-gradient",
        },
    ],
    image: carrent,
    source_code_link: "https://github.com/nesreendarrat",
    },
    {
    name: "Alburhan-Education",
    description:
        "Web application that helps new invester to learn and step their first steps in the crypto market, explaining different topics with linked videos, NFT's, Blockchain, Halal cryptocurrencies.",
    tags: [
        {
        name: "HTML",
        color: "blue-text-gradient",
        },
        {
        name: "CSS",
        color: "green-text-gradient",
        },
        {
        name: "JavaScript",
        color: "pink-text-gradient",
        },
    ],
    image: jobit,
    source_code_link: "https://github.com/nesreendarrat",
    },
    {
    name: "Real Estate",
    description:
    " A comprehensive booking platform that allows users to rent or buy flats, houses, garages, stores,  and lands, and offers curated recommendations for popular properties.",
      tags: [
        {
          name: "UI/UX",
          color: "green-text-gradient",
          },
        
        {
        name: "Figma",
        color: "pink-text-gradient",
        },
        
    ],
    image: tripguide,
    source_code_link: "https://www.behance.net/nesreenseddik1",
    },
];

    export { services, technologies, experiences, testimonials, projects };