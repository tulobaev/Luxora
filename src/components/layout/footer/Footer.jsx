import React from "react";
import scss from "./Footer.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import CommentBox from "../../coments/Comment";

const Footer = () => {
  return (
    <div id={scss.footer}>
      <footer className={scss.footer}>
        <div className="container">
          <div className={scss.footerContent}>
            <div className={scss.logo}>
              <h2>Ми</h2>
              <span className={scss.bes}>∞</span>
            </div>

            <div className={scss.aboutUs}>
              <h3>О нас</h3>
              <p>Вопросы и ответы</p>
              <p>Дерево знаний</p>
              <p>Условия доставки</p>
            </div>

            <div className={scss.partners}>
              <h3>Партнёрам</h3>
              <p>Стать автором</p>
              <p>Партнерская программа</p>
              <p>Дистрибуция</p>
              <p>Для бизнеса</p>
            </div>

            <div className={scss.contacts}>
              <h3>Контакты</h3>
              <p>+996 505 737 973</p>
              <a
                className={scss.WhatsAppIcon}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#25D366",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                href="https://wa.me/996505737973"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon style={{ color: "inherit" }} /> Написать в
                WhatsApp
              </a>
            </div>

            <div className={scss.socials}>
              <h3>Мы в соцсетях</h3>
              <a
                className={scss.InstagramIcon}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#E4405F",
                }}
                href="https://www.instagram.com/tu1obaev513?igsh=MTk3Z3ZqMnBhcTRkaA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon /> Instagram
              </a>

              <a
                className={scss.TelegramIcon}
                href="https://t.me/bookstoreworld_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                  color: "#229ED9",
                }}
              >
                <TelegramIcon /> Telegram
              </a>
            </div>
            <CommentBox />
          </div>

          <div className={scss.copyright}>
            <p>© 2025 Ми∞ Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
