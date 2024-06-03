import Link from "next/link"
import $ from "jquery"
import { useRouter } from "next/router";
import { useEffect } from "react";

const LeftSide = () => {
  const router = useRouter();

  const sdpi = () => {
    if ($('.dpi').text() === 'Display Personal Info') {
      $('.dpi').text('Hide Personal Info')
      $('.pi').removeClass('d-none')
      $('.dpi').removeClass('btn-dark').addClass('btn-primary')
    } else {
      $('.dpi').text('Display Personal Info')
      $('.dpi').removeClass('btn-primary').addClass('btn-dark')
      $('.pi').addClass('d-none')
    }
  }
  
  useEffect(() => {
    const kkpi = document.querySelector('.kkpi')
    if (window.innerWidth <= 1024) {
      kkpi?.classList.add('d-none')
    } else {
      kkpi?.classList.remove('d-none')
    }
  }, [])

  return (
    <div className="col-lg-4 col-md-4 col-xl-4 main-bg left-side pad-5">
      <div className="header-mobile">
        <nav>
          <Link href="/">
            <a className={`${router.asPath === '/' ? "active" : null}`}>Home</a>
          </Link>

          <Link href="/articles">
            <a className={`${router.asPath.includes('/articles') ? "active" : null}`}>Articles</a>
          </Link>
        </nav>

        <div className="d-flex flex-column align-items-center w-100">
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/me.jpg" alt="" />
          }
          <div className="mt-3 text-center">
            <h1 className="text-white">Djimmy Poliard</h1>
            <h5 className="text-muted">Full-Stack Software Developer</h5>
            {router.asPath !== '/' && <button className="btn btn-dark mt-3 dpi" onClick={sdpi}>Display Personal Info</button>}
          </div>
        </div>
      </div>

      <div className={`${router.asPath !== '/' ? "pi kkpi d-nones" : null}`}>
        <div className="block">
          <div>
            <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1 kk'>contact</h6>
            <span className="d-flex align-items-center mb-2">
              <span className="material-icons mr-2">smartphone</span>
              <span><a href="tel:+1 (407) 468-3155">+1 (407) 468-3155</a></span>
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
                <a href="https://goo.gl/maps/Bzf23Eqe3yG5ZoTM7" target="_blanc">
                  Miami Fl, USA
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
              <strong>AS Degree</strong>
              <span>Computer Programming and Analysis</span>
              <span>Valencia College</span>
              <span>January 2024 - Present</span>
            </span>
            <br />
            <span className="d-flex flex-column">
              <strong>Bachelor’s Degree</strong>
              <span>Electronic Egineering</span>
              <span>Université Lumière (Ulum)</span>
              <span>2010 - 2014</span>
            </span>
          </div>
        </div>

        <div className="block mt-5">
          <div className="left">
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
          <div className="left">
            <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>Skills</h6>
            <span className="d-flex flex-column skills">
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
          <div className="left">
            <h6 className='w-100 text-light border-bottom mb-3 text-uppercase pb-1'>soft Skills</h6>
            <span className="d-flex flex-column skills">
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
    </div>
  )
}

export default LeftSide