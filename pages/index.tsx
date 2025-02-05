import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/layouts/layout';
import LeftSide from '../components/layouts/left_side';

interface HomeProps {
  feed: any;
}

const Home = ({ feed }: HomeProps) => {

  return (
    <Layout>

      <div className="row content">
        <LeftSide />

        <div className="col-lg-8 col-md-8 col-xl-8 right-side pad-5 text-justify">
          <div className="block">
            <div>
              <h6 className='w-100  border-bottom mb-3 text-uppercase pb-1'>Profile</h6>
              <p>
                Full-stack Developer with {(new Date()).getFullYear() - 2016}+ years of experience building scalable web
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

              <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <span className="d-flex flex-column">
                        <strong>Full-stack Software Developer</strong>
                        <span>Golabs | <span className="text-muted">August 2022 - January 2024</span></span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse shows" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        A technology company headquartered in Costa Rica, with US headquarters based in Stamford, CT <br /><br />
                        During this time I participated in the following projects:
                        <ul>
                          <li>
                            <strong>Client: Finalsite (August 2022 – January 2024)</strong>
                            <p>
                              Team up with other engineers on an Education CMS platform using several technologies
                              <br />

                              <span>Main tasks executed in the project:</span>
                              <br />
                              - Problem solving
                              <br />
                              - Code review
                              <br />
                              - Develop new features
                              <br />
                              <strong>Technologies:</strong> Ruby on Rails, Backbone JS
                              <br />
                              Link: <a href="https://www.finalsite.com/ " target="_blanc">https://www.finalsite.com/ </a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span className="d-flex flex-column">
                        <strong>Full-stack Software Developer</strong>
                        <span>BairesDev | <span className="text-muted">August 2021 - April 2023</span></span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        Nearshore Technology Solutions company. They architect and engineer scalable and high-performing software solutions to meet the business challenges of our clients. <br /><br />
                        During this time I participated in the following projects:
                        <ul>
                          <li>
                            <strong>Client: Place Inc (August 2022 – April 2023)</strong>
                            <p>
                              PLACE is the industry’s only all-in-one real estate platform providing technology
                              and services to the top 20% of real estate agents focused on delivering unparalleled
                              consumer experiences.
                              <br />

                              <span>Main tasks executed in the project:</span>
                              <br />
                              - work on the reports modul(backend and frontend)
                              <br />
                              <strong>Technologies:</strong> Ruby on Rails, Sidekiq, RSpec, PostgreSQL, Redis, Git, Github, Docker, React JS
                              <br />
                              Link: <a href="https://place.com/ " target="_blanc">https://place.com/ </a>
                            </p>
                          </li>
                          <li>
                            <strong>Client: Amount (September 2021 – August 2022)</strong>
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <span className="d-flex flex-column">
                        <strong>Software Development Consultant</strong>
                        <span>Dixivox | <span className="text-muted">Contract (Since 2018)</span></span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        A company that builds solutions based on communication and education. <br /> <br />
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
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingfoor">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefoor" aria-expanded="false" aria-controls="collapsefoor">
                      <span className="d-flex flex-column">
                        <strong>Full-stack Software Developer</strong>
                        <span>NouKòd | <span className="text-muted">April 2019 – March 2021</span></span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapsefoor" className="accordion-collapse collapse" aria-labelledby="headingfoor" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        NouKod is an IT business and revenue-generating entity. The business aspect provides jobs for ALL newly trained IT and programming specialists via
                        local contracts and global outsourcing. <br /> <br />
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
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingfive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                      <span className="d-flex flex-column">
                        <strong>Front-End Developer</strong>
                        <span>Ztelecom | <span className="text-muted">August 2018 - August 2019</span></span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div>
                        A company that builds solutions based on communication and education. <br /> <br />
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
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Personal Project */}
          <div className="block mt-5">
            <div>
              <h6 className='w-100  border-bottom mb-3 text-uppercase pb-1'>Personal Project</h6>

              <div className="accordion accordion-flush" id="accordionPP">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                      <span className="d-flex flex-column">
                        <strong>LennHT</strong>
                        <span>Online Training Platform</span>
                      </span>
                    </button>
                  </h2>
                  <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne1" data-bs-parent="#accordionPP">
                    <div className="accordion-body">
                      <div>
                        The LennHt is a leading online learning platform that helps anyone learn business, software, technology and creative skills to achieve personal and professional 
                        goals. Through individual, corporate and academic subscriptions, members have access to the LennHt video library of engaging, top-quality courses taught by 
                        recognized industry experts.
                        <br />
                        <strong>Main Technologies:</strong> Laravel(PHP), Next.Js(React), TypeScript, PostgreSQL, Git, Github,
                        <br />
                        <strong>Links:</strong> <a href="https://lennht.com" className='text-info' target="_blanc">https://lennht.com </a> - <a href="https://lennht.app" className='text-info' target="_blanc">https://lennht.app </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home