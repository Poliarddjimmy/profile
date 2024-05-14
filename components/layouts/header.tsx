import Link from "next/link";
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <>
        <header className='header'>
            <div className="row">
              <div className="col-md-4 main-bg left-side"></div>
              <div className="col-lg-8 col-md-12 right-side d-flex align-items-center px-5">
                <nav>
                  <Link href="/">
                    <a className={`${router.asPath === '/' ? "active" : null}`}>Home</a>
                  </Link>

                    <Link href="/blogs">
                        <a className={`${router.asPath === '/blogs' ? "active" : null}`}>Blogs</a>
                    </Link>
                </nav>

                <div className="ml-auto">
                  <Link href="/files/djimmy_poliard_resume.pdf">
                    <a className="btn btn-sm btn-dark" target="_blanc" onClick={() => void 0}>
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
                <h5 className="text-muted">Full-Stack Software Developer</h5>
              </div>
            </div>
          </div>
        </>
    );
};

export default Header;