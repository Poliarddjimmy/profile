import Header from "./header";
import SEO from '../../components/seo';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
}

const Layout = ({ children, title, image }: LayoutProps) => {
    return (
        
      <div className="container main-container">
      <SEO
        title={title || "Home"}
        image={image}
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