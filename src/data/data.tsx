import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Karanveer Singh',
  description: "Resume/Portfolio site built using react and tailwind css",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Karanveer Singh`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Ahemdabad based <strong className="text-stone-100">Full Stack Web Developer </strong>, 
        currently looking for a position to help build better and accessible websites.</p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me reading ,and writing and exploring new genres of music,
        and I'm always looking for new projects to work on.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a BCA graduate, I will be joining as a fresher. I have knowledge in full-stack development, which includes both front-end and back-end web development. In the front-end, I am proficient in HTML, CSS, and JavaScript, while in the back-end, I am familiar with server-side programming languages such as Java and Python. Furthermore, I have experience working with databases, including MySQL and MongoDB. I am also well-versed in various web development frameworks such as React and Node.js. With these skills, I am confident in my ability to contribute to any project I am assigned to and learn new technologies quickly. `,
  aboutItems: [
    {label: 'Location', text: 'Ahemdabad, Gujarat', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian 🇮🇳', Icon: FlagIcon},
    {label: 'Interests', text: 'Philosophy, Music, Tech', Icon: SparklesIcon},
    {label: 'Study', text: 'GLS UNIVERSITY, Faculty of Computer application', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'looking for work.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Hindi',
        level: 9,
      },
      {
        name: 'Gujarati',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2023',
    location: 'GLS University',
    title: 'Bachelor\'s of Computer Application',
    content: <p>Key courses includes modern programming languages, databases, and web development, data structure and algorithms, operating systems, DBMS</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - January 2023',
    location: 'EQUIIRE CONSULTING, Chandigarh',
    title: 'Intern',
    content: (
      <p>
        I made wordpress Landing pages for the company, also while doing learning tasks of data scraping, data cleanup, data analysis, lead generation, cold calling and pitching

      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh. Quisque cursus, metus vitae pharetra sagittis, quam turpis adipiscing lorem, vitae mattis nibh ligula nec',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh. Quisque cursus, metus vitae pharetra sagittis, quam turpis adipiscing lorem, vitae mattis nibh ligula nec',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh. Quisque cursus, metus vitae pharetra sagittis, quam turpis adipiscing lorem, vitae mattis nibh ligula nec',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'you can reach out to me anytime',
  items: [
    {
      type: ContactType.Email,
      text: 'karansingh.26898@gmail.com',
      href: 'mailto:karansingh.26898@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Karan Singh',
      href: 'https://www.linkedin.com/in/karan-singh-8b5621197/',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'Funjabi1',
      href: 'https://github.com/Funjabi1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Funjabi1'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/karan-singh-8b5621197/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/funjabi8'},
];
