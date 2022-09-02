import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import SEO from '../components/seo';
import { renderToString } from "react-dom/server"
import Content from '../components/content';


const Home: NextPage = () => {
  const print = () => {
    if (typeof window !== 'undefined') {
      var jsPDF = require('jspdf');
      const string = renderToString(<Content print={print} />);
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.fromHTML(string);
      pdf.save("pdf");
    }
  };

  return (
    <div className="container main-container">
      <SEO
        title="Home"
      />
      <div className="main shadow">
        <Content print={print} />
      </div>
    </div>
  );
}

export default Home
