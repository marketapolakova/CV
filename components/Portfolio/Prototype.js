import React from "react";
import Navbar from "../navbar/Navbar";
import NavbarCz from "../navbarCz/NavbarCz";
import Link from "next/link";
import S from "./portfolio.module.scss";
import { isMobile } from "react-device-detect";
function Portfolioo2({ language }) {
  return (
    <div>
      <div className={S.div}>
        {language === "cz" ? <NavbarCz /> : <Navbar />}
        <div className={S.box}>
          <h1 className={S.h1}>Portfolio</h1>
          <h2 className={S.h2}>
            {language === "cz" ? "Prototypy" : "Prototypes"}
          </h2>
          <div className={S.container}>
            <Link
              href={
                isMobile
                  ? "https://xd.adobe.com/view/733304f7-15aa-41a1-bcfc-76269af18561-2660/?fullscreen"
                  : "https://xd.adobe.com/view/07b209ff-d973-4000-b046-d0f46a227602-52e1/?fullscreen"
              }
            >
              <a target="_blank">
                <div className={S.img_dogatas}>
                  <div className={S.hidden}>
                    <p className={S.p}>
                      {language === "cz"
                        ? "Prototyp fiktivního útulku"
                        : "Prototype of fititious pet shelter"}
                    </p>
                  </div>
                </div>
                <div className={S.mobileCart}>
                  <p className={S.p}>
                    {language === "cz"
                      ? "Prototyp fiktivního útulku"
                      : "Prototype of fititious pet shelter"}
                  </p>{" "}
                </div>
              </a>
            </Link>
            <Link
              href={
                isMobile
                  ? "https://xd.adobe.com/view/d5c9c8fb-bcd8-4dac-beb3-2462eaba5a17-809a/?fullscreen"
                  : "https://xd.adobe.com/view/633523f0-953c-4fff-83d1-c400df508886-3666/?fullscreen"
              }
            >
              <a target="_blank">
                <div className={S.img_dogatas_adm}>
                  <div className={S.hidden}>
                    <p className={S.p}>
                      {language === "cz"
                        ? "Prototyp fiktivního útulku - administrace"
                        : "Prototype of fititious pet shelter - administration"}
                    </p>
                  </div>
                </div>
                <div className={S.mobileCart}>
                  <p className={S.p}>
                    {language === "cz"
                      ? "Prototyp fiktivního útulku"
                      : "Prototype of fititious pet shelter"}
                  </p>{" "}
                </div>
              </a>
            </Link>
            <Link
              href={
                isMobile
                  ? "https://xd.adobe.com/view/e9333cfe-21b8-462e-b92a-d76b29bb6009-bc60/?fullscreen"
                  : "https://xd.adobe.com/view/e9333cfe-21b8-462e-b92a-d76b29bb6009-bc60/?fullscreen"
              }
            >
              <a target="_blank">
                <div className={S.img_cv}>
                  <div className={S.hidden}>
                    <p className={S.p}>
                      {language === "cz"
                        ? "Prototyp životopisu"
                        : "Prototype of CV"}
                    </p>
                  </div>
                </div>
                <div className={S.mobileCart}>
                  <p className={S.p}>
                    {language === "cz"
                      ? "Prototyp životopisu"
                      : "Prototype of CV"}
                  </p>{" "}
                </div>
              </a>
            </Link>
            {/* sipka od carouselu */}
            <Link href={language === "cz" ? "/cz/wordpress" : "/wordpress"}>
              <a>
                <div>
                  <div>
                    <p className={S.arrow_forward}>{">"}</p>
                  </div>
                </div>
              </a>
            </Link>
            <Link
              href={
                language === "cz"
                  ? "/cz/programming-challenges"
                  : "/programming-challenges"
              }
            >
              <a>
                <div>
                  <div>
                    <p className={S.arrow_backward}>{"<"}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolioo2;
