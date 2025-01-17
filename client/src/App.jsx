import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Tech,
  Career,
  Projects,
  Feedback,
  Contact,
  Footer,
} from "./components";

function App() {
  // const [ipInfo, setIpInfo] = React.useState("");
  // const ipInfoToken = import.meta.env.VITE_IPINFO_TOKEN;
  const emailUsername = "alsaadi.rami24";
  const emailDomain = "gmail.com";
  const ccEmail = "ramibelo";
  // const bccEmail = JSON.stringify(ipInfo);

  const sendMail = () => {
    const cc = `${ccEmail}@${emailDomain}`;
    // const bcc = `${bccEmail}@${emailDomain}`;
    const emailLink = `mailto:${emailUsername}@${emailDomain}?cc=${cc}&bcc=${cc}&subject=Job Offer from:&body=Dear Rami,`;

    window.open(emailLink, "_blank", "noopener,noreferrer");
  };

  // React.useEffect(() => {
  //   const fetchClientInfo = async () => {
  //     try {
  //       const response = await fetch("https://ipinfo.io/json", {
  //         headers: {
  //           method: "GET",
  //           Host: "ipinfo.io",
  //           "Sec-Fetch-Site": "cross-site",
  //           "Accept-Encoding": "gzip, deflate, br",
  //           Connection: "keep-alive",
  //           "Sec-Fetch-Mode": "navigate",
  //           Accept:
  //             "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  //           Authorization: `Bearer ${ipInfoToken}`,
  //           "Alt-Used": "ipinfo.io",
  //           "Access-Control-Allow-Credentials": "true",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       });
  //       const data = await response.json();
  //       setIpInfo(data);
  //     } catch (error) {
  //       console.error("Error fetching client info:", error);
  //     }
  //   };

  // fetchClientInfo();
  // }, []);
  // console.log(ipInfo);
  const [isMobile, setMobile] = useState(
    window.innerWidth <= 500 || window.innerHeight <= 500
  );
  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 500 || window.innerHeight <= 500);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <Router>
      <div className="animate-hover-imgs">
        <div className="relative z-0 bg-black">
          <div className="bg-1 bg-cover bg-center bg-no-repeat">
            <Navbar sendMail={sendMail} />
            <Hero isMobile={isMobile} />
          </div>
          <About isMobile={isMobile} />
          <Career />
          {!isMobile ? <Tech /> : null}
          <Projects />
          <Feedback />
          <div className="relative z-0">
            <Contact />
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
