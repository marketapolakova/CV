import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz";
import Progressbar from "../progressbar/Progressbar";
import S from "./skills.module.scss";
function Skils({ language }) {
  return (
    <div>
      <div className={S.div}>
        {language === "cz" ? <NavbarCz /> : <Navbar />}
        <div className={S.box}>
          <h1 className={S.h1}>
            {language === "cz" ? "Dovednosti" : "Skills"}
          </h1>
          <div className={S.container}>
            <div style={{ textAlign: "right", paddingRight: "3rem" }}>
              <h2 className={S.h2}>Frontend</h2>
              <Progressbar s="HTML" w="70" />
              <Progressbar s="CSS3" w="70" />
              <Progressbar s="JavaScript" w="55" />
              <Progressbar s="React" w="50" />

              <h2 className={S.h2}>Backend</h2>
              <Progressbar s="Node.js" w="30" />
              <Progressbar s="Express.js" w="30" />
              <Progressbar s="Java" w="20" />
              <h2 className={S.h2}>
                {language === "cz" ? "CMS systémy" : "CMS systems"}{" "}
              </h2>
              <Progressbar s="Wordpress" w="30" />
              <Progressbar s="Liferay" w="60" />
            </div>
            <div style={{ textAlign: "right", paddingRight: "3rem" }}>
              <h2 className={S.h2}>UI</h2>
              <Progressbar s="Adobe XD" w="90" />
              <Progressbar s="Figma" w="40" />

              <h2 className={S.h2}>Microsoft office</h2>
              <Progressbar s="Word" w="70" />
              <Progressbar s="Excel" w="70" />
              <Progressbar s="Powerpoint" w="70" />
              <h2 className={S.h2}>
                {language === "cz" ? "Ostatní dovednosti" : "Other skills"}
              </h2>
              <Progressbar
                s={language === "cz" ? "Anglický jazyk" : "English"}
                w="70"
              />
              <Progressbar
                s={
                  language === "cz"
                    ? "Psaní všemi deseti"
                    : "Typing with 10 fingers"
                }
                w="80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
