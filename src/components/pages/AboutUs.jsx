import React from "react";
import scss from "./About.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import donPhoto from "../../image/7a8a5eb1-a85f-497c-894f-ea7ab646c956.jpeg";
import kamaPhoto from "../../image/6f1b38ef-3221-446b-87a8-fb9efc995fbd.jpeg";
import talgatPhoto from "../../image/fc4c9e99-d2f9-48b1-9b34-31eb636e2fc8.jpeg";
import { Tooltip } from "@mui/material";

const AboutUs = () => {
  const doniInst = "https://www.instagram.com/daniel1mv1?igsh=cG9qY2w3YjlodmNr";
  const talgatInst =
    "https://www.instagram.com/tu1obaev513?igsh=MTk3Z3ZqMnBhcTRkaA==";

  return (
    <div id={scss.aboutUs}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.content}>
            <div className={scss.card}>
              <img src={kamaPhoto} alt="Profile" />
              <p>Батирова Нуррахат </p>
              <p>Frontend Developer</p>
              <Tooltip title="Инстаграмм">
                <a
                  href="https://www.instagram.com/batirovaxs__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={scss.instagramLink}
                >
                  <InstagramIcon />
                </a>
              </Tooltip>
            </div>
          </div>
          <div className={scss.content2}>
            <div className={scss.card}>
              <img src={donPhoto} alt="Profile" />
              <p>Мамаджанов Даниель</p>
              <p>Frontend Developer</p>
              <Tooltip title="Инстаграмм">
                <a href={doniInst} className={scss.instagramLink}>
                  <InstagramIcon />
                </a>
              </Tooltip>
            </div>
          </div>
          <div className={scss.content3}>
            <div className={scss.card}>
              <img src={talgatPhoto} alt="Profile" />
              <p>Тулобаев Талгат</p>
              <p>Frontend Developer</p>
              <Tooltip title="Инстаграмм">
                <a
                  href={talgatInst}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={scss.instagramLink}
                >
                  <InstagramIcon />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
