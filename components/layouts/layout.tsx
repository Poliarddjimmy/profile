import Header from "./header";
import SEO from '../../components/seo';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        
      <div className="container main-container">
      <SEO
        title="Home"
      />
      <div className="main shadow">
        <div className="container">
          <Header />
          {children}
          </div>
        </div>
      </div>
    );
};

export default Layout;