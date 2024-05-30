import Header from "./header";
import SEO from '../../components/seo';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
    return (
        
      <div className="container main-container">
      <SEO
        title={title || "Home"}
      />
      <div className="main shadow">
        <div className="container">
          <Header title={title} />
          {children}
          </div>
        </div>
      </div>
    );
};

export default Layout;