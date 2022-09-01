import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '../components/seo';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container main-container">
      <SEO
        title="Home"
      />
      <div className="main shadow">
        <div className="container">

          <header className='header'>
            <div className="row">
              <div className="col-md-4 main-bg left-side"></div>
              <div className="col-lg-8 col-md-12 right-side d-flex align-items-center px-5">
                <nav>
                  <Link href="/">
                    <a className={`${router.asPath === '/' ? "active" : null}`}>Home</a>
                  </Link>

                  {/* <Link href="/about">
                    <a className={`${router.asPath === '/about' ? "active" : null}`}>About</a>
                  </Link>

                  <Link href="/contact">
                    <a className={`${router.asPath === '/contact' ? "active" : null}`}>Contact</a>
                  </Link> */}
                </nav>

                <div className="ml-auto">
                  <Link href="/files/djimmy_poliard_resume.pdf">
                    <a className="btn btn-sm btn-dark" target="_blanc">
                      Hire me
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <div className="top">
            <div className="row">
              <div className="col-md-4 bg-light left-side">
                <div className="d-flex align-items-center">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/me.png" alt="" />
                  }
                </div>
              </div>
              <div className="col-lg-8 col-md-12 bg-light right-side d-flex flex-column justify-content-center pl-5">
                <h1 className="text-primarys">Djimmy Poliard</h1>
                <h5 className="text-muted">Full-Stack Software Engineer</h5>
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-lg-4 col-md-4 col-xl-4 main-bg left-side pad-5">
              <div className="header-mobile">
                <div className="d-flex flex-column align-items-center w-100">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src="/images/me.png" alt="" />
                  }
                  <div className="mt-3 text-center">
                    <h1 className="text-white">Djimmy Poliard</h1>
                    <h5 className="text-muted">Full-Stack Software Engineer</h5>
                  </div>
                </div>
              </div>
              <div className="block">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>contact</h6>
                  <span className="d-flex align-items-center mb-2">
                    <span className="material-icons mr-2">smartphone</span>
                    <span>+1 (829) 859-2489</span>
                  </span>

                  <span className="d-flex align-items-center mb-2">
                    <span className="material-icons mr-2">email</span>
                    <span>
                      <a href="mailto:djimmypoliard@gmail.com">
                        djimmypoliard@gmail.com
                      </a>
                    </span>
                  </span>

                  <span className="d-flex align-items-center mb-2">
                    <span className="material-icons mr-2">location_on</span>
                    <span>
                      <a href="https://www.google.com/maps/place/Punta+Cana/@18.640825,-68.7584524,11z/data=!3m1!4b1!4m5!3m4!1s0x8ea891645dcbfe77:0x61881cfaed12f6f3!8m2!3d18.5600761!4d-68.372535" target="_blanc">
                        Punta Cana, DR
                      </a>
                    </span>
                  </span>

                  <span className="d-flex align-items-center mb-2">
                    <span className="fa fa-linkedin mr-2" />
                    <span>
                      <a href="https://www.linkedin.com/in/djimmy-poliard-41b1b4b9/" target="_blanc">
                        Djimmy Poliard
                      </a>
                    </span>
                  </span>

                  <span className="d-flex align-items-center mb-2">
                    <span className="fa fa-github mr-2" />
                    <span>
                      <a href="https://github.com/Poliarddjimmy" target="_blanc">
                        Poliarddjimmy
                      </a>
                    </span>
                  </span>

                  <span className="d-flex align-items-center mb-2">
                    <span className="fa fa-twitter mr-2" />
                    <span>
                      <a href="https://twitter.com/poliard88" target="_blanc">
                        poliard88
                      </a>
                    </span>
                  </span>
                </div>
              </div>

              <div className="block mt-5">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>Languages</h6>
                  <span className="d-flex flex-column">
                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">language</span>
                      <span>Haitian C.</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">language</span>
                      <span>French</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">language</span>
                      <span>English</span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="block mt-5">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>Education</h6>
                  <span className="d-flex flex-column">
                    <strong>Bachelor’s Degree</strong>
                    <span>Electronic Egineering</span>
                    <span>Université Lumière (Ulum)</span>
                    <span>2010 - 2014</span>
                  </span>
                </div>
              </div>

              <div className="block mt-5">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>COURSES & TRAINING</h6>
                  <span className="d-flex flex-column">
                    <strong>freeCodeCamp</strong>
                    <Link href="https://www.freecodecamp.org/certification/fccdd1ed1dc-e85d-47fe-915a-3df14c1094c3/javascript-algorithms-and-data-structures">
                      <a target="_blanc" title="Show certificate">
                        JavaScript Algorithms and Data Structures, 2022
                      </a>
                    </Link>
                  </span>

                  <span className="d-flex flex-column mt-3">
                    <strong>Udemy</strong>
                    <Link href="/certificates/aws-certificate.pdf">
                      <a target="_blanc" title="Show certificate">
                        AWS, 2021
                      </a>
                    </Link>

                    <Link href="/certificates/azur-devops-certificate.pdf">
                      <a target="_blanc" title="Show certificate">
                        Azure DevOps, 2021
                      </a>
                    </Link>

                    <Link href="/certificates/docker-certificate.pdf">
                      <a target="_blanc" title="Show certificate">
                        Docker, 2021
                      </a>
                    </Link>

                    <Link href="/certificates/gcp-certificate.pdf">
                      <a target="_blanc" title="Show certificate">
                        GCP Fundamentals, 2021
                      </a>
                    </Link>
                  </span>

                  <span className="d-flex flex-column mt-3">
                    <strong>Flatiron School</strong>
                    <Link href="/certificates/fsd.pdf">
                      <a target="_blanc" title="Show certificate">
                        Full-Stack Development, 2019
                      </a>
                    </Link>
                  </span>
                </div>
              </div>

              <div className="block mt-5">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>Skills</h6>
                  <span className="d-flex flex-column">
                    <strong>Top</strong>
                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Ruby on Rails</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>React.js</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>TypeScript</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Next.js</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>React Native</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Javascript</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Redux</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>HTML</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>CSS</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Bootstrap</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Styled-component</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Laravel</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>GraphQL</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>REST API</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>PHP</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Sinatra</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>MySQL</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>PostgreSQL</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>SQLite</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Docker</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>RSpec</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Sidekiq</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Stripe</span>
                    </span>

                    <strong className="mt-3">Familiar with</strong>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Node.js</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Redis</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Websocket</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>RabbitMQ</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>GCP</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>AWS</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Azure DevOps</span>
                    </span>

                    <strong className="mt-3">Like</strong>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Golang</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Flutter</span>
                    </span>
                  </span>
                </div>
              </div>


              <div className="block mt-5">
                <div>
                  <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>soft Skills</h6>
                  <span className="d-flex flex-column">
                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Good communication</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Time management</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Problem-solving</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Adaptability and flexibility</span>
                    </span>

                    <span className="d-flex align-items-center">
                      <span className="material-icons mr-2">blur_on</span>
                      <span>Ability to accept feedback</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 right-side pad-5 text-justify">
              <div className="block">
                <div>
                  <h6 className='w-100  border-bottom mb-3 text-uppercase pb-1'>Profile</h6>
                  <p>
                    Full-stack Engineer with {(new Date()).getFullYear() - 2015}+ years of experience building scalable web
                    applications and internal tools that drastically improve efficiency. <br />
                    Throughout my career {`I've`} built applications like fintech platform,
                    communication, e-commerce, Point Of Sale(POS), HR management, School management,
                    Social network and so on using PHP, laravel, Ruby on Rails, Sinatra, Bootstrap,
                    Javascript, React JS, React Native, Next.Js, TypeScript GraphQL and other technologies.
                  </p>
                </div>
              </div>

              <div className="block mt-5">
                <div>
                  <h6 className='w-100  border-bottom mb-3 text-uppercase pb-1'>work experience</h6>
                  <div className="d-flex flex-column">
                    <strong>Full-stack Engineer</strong>
                    <span>BairesDev | <span className="text-muted">2021 - Present</span></span>
                    <div>
                      During this time I participated in the following projects:
                      <ul>
                        <li>
                          <strong>Client: Amount (September 2021 – Aug 2022)</strong>
                          <p>
                            Team up with other engineers on banking and point-of-sale solutions using
                            several technologies such as Ruby on Rails, GraphQl, Sidekiq, Python, Go...
                            On this platform, I was responsible to develop the refund process in
                            the second generation and work through the payment processing generally.
                            And also contribute to other modules such as the account opening module.
                            <br />

                            <span>Main tasks executed in the project:</span>
                            <br />
                            - Developed the refund module(ACH, Paper Check, and Debit Card).
                            <br />
                            - Investigate the payment processing
                            <br />
                            - Work on the payment gateway
                            <br />
                            I’m one of the engineers that work in the payment processing on the platform,
                            and {`I'm`} always part of the solution when they are facing any issue with a payment.
                            <br />
                            <strong>Technologies:</strong> Ruby on Rails, GraphQL, Sidekiq, RSpec, PostgreSQL, Redis, Git, Github, Docker
                            <br />
                            Link: <a href="https://www.amount.com/ " target="_blanc">https://www.amount.com/ </a>
                          </p>
                        </li>

                        <li>
                          <strong>Client: Place Inc | Aug 2022 - Current</strong>
                          <p>
                            Place cms:  PLACE is the industry’s only all-in-one real estate platform providing
                            technology and services to the top 20% of real estate agents focused on delivering
                            unparalleled consumer experiences.
                            <br />
                            <strong>Technologies:</strong> Ruby on Rails, RESTl API, Sideqik, Redis, RabbitMQ, React, PostgreSQL, Javascript, Git, Github, Docker
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-column mt-3">
                    <strong>Software Development Consultant</strong>
                    <span>Dixivox | <span className="text-muted">Since 2018</span></span>
                    <div>
                      A company that builds solutions based on communication and education. <br />
                      During this time I participated in the following projects:
                      <ul>
                        <li>
                          <strong>Project: Edikatek (Dec 2019 –Dec 2020)</strong>
                          <p>
                            Edikatek is a school management platform where students {`don't`} need present in a school space to follow courses, do homework, to be evaluated...
                            {`It's`} the same thing for the teacher. And the parents have an account on the platform to follow the progress of the children and receive notification
                            from the system or from an administrator or from the professor directly. The main language of the front end is Javascript.

                            <br />
                            <span>Main tasks executed in the project:</span>
                            <br />
                            - Design and develop the backend.
                            <br />
                            - work on the frontend side with other engineers.
                            <br />
                            My major contribution highlighting is participating in the design of the platform.
                            <br />
                            <strong>Technologies:</strong> Ruby on Rails, Next.js, GraphQL, PostgreSQL, Sidekiq, Git, Github.
                            <br />
                            {/* Link: <a href="https://zsinat.com/ " target="_blanc">https://zsinat.com/ </a> */}
                          </p>
                        </li>

                        <li>
                          <strong>Project: Konekte’m (Dec 2021 – Current)</strong>
                          <p>
                            Konekte’m is an Enterprise communication platform for voice, text and social media where customers can find services such as Call Center,
                            CRM, Soft Phone, Voice & SMS Interactive. Each service builds using different technologies.

                            <br />
                            <span>Main tasks executed in the project:</span>
                            <br />
                            - Design and develop the call center and the CRM using Ruby on Rails, Active Record, RabbitMQ(bunny), and PostgreSQL.
                            <br />
                            - Design and develop the frontend side with other engineers.
                            <br />
                            My major contribution highlighting is participating in the design of the platform.
                            <br />
                            <strong>Technologies:</strong> Ruby on Rails, Next.js, GraphQL, PostgreSQL, Sidekiq, Git, Github, RabbitMQ(bunny).
                            <br />
                            {/* Link: <a href="https://zsinat.com/ " target="_blanc">https://zsinat.com/ </a> */}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-column mt-3">
                    <strong>Front-End Developer</strong>
                    <span>Ztelecom | <span className="text-muted">2018 - 2019</span></span>
                    <div>
                      A company that builds solutions based on communication and education. <br />
                      During this time I participated in the following projects:
                      <ul>
                        <li>
                          <strong>Project: Sinat (August 2018 – August 2019)</strong>
                          <p>
                            Sinat is a communication solution where people can by an international number to make local and international calls.
                            <br />
                            <span>Main tasks executed in the project:</span>
                            <br />
                            - participate in the front-end development.
                            <br />
                            - develop a complex form with dynamic input.
                            <br />
                            My major contribution to the app is the integration of stipe. Allow the customer payment on the platform.
                            <br />
                            <strong>Technologies:</strong> React.js, PostgreSQL, Stripe, Git, Github
                            <br />
                            {/* Link: <a href="https://zsinat.com/ " target="_blanc">https://zsinat.com/ </a> */}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex flex-column mt-3">
                    <strong>Software Engineer</strong>
                    <span>NouKòd | <span className="text-muted">Apr 2019 – Mar 2021</span></span>
                    <div>
                      NouKod is an IT business and revenue-generating entity. The business aspect provides jobs for ALL newly trained IT and programming specialists via
                      local contracts and global outsourcing. <br />
                      During this time I participated in the following projects:

                      <ul>
                        <li>
                          <strong>Project: to the point (October 2020 – March 2021)</strong>
                          <p>
                            ToThePoint is a social media app for students that allow them to post pictures, GIF, and Videos categorized by a study by subject.
                            The app also has a chat message system that allows the student to be in constant connection with the admins.
                            <br />
                            <span>Main tasks executed in the project:</span>
                            <br />
                            - Developed several screens for the mobile and web app.
                            <br />
                            - work on some endpoints in the backend
                            <br />
                            - make the web app responsive
                            <br />
                            <strong>Technologies:</strong> React native, React native web, MySql, Node.js Rest API, Git, Github, Styled component.
                            <br />
                            {/* Link: <a href="https://zsinat.com/ " target="_blanc">https://zsinat.com/ </a> */}
                          </p>
                        </li>

                        <li>
                          <strong>Project: Noukod Training Platform (December 2019 – August 2020)</strong>
                          <p>
                            A training platform used to make boot camps to hire new people.

                            <br />
                            <span>Main tasks executed in the project:</span>
                            <br />
                            - Design, Developed, and maintain the back end.
                            <br />
                            - work on the frontend side with other engineers.
                            <br />
                            The company used another platform to train new people for the hiring process(Flatiron School), with this platform, the company save a lot of money.
                            <br />
                            <strong>Technologies:</strong> Ruby on Rails, React.js, PostgreSQL, Git, Github.
                            <br />
                            {/* Link: <a href="https://zsinat.com/ " target="_blanc">https://zsinat.com/ </a> */}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
