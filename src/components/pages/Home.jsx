import React, { useState, useEffect } from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

let Home = () => {
  let [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { data, readDataBooks } = useProduct();

  useEffect(() => {
    readDataBooks();
  }, []);
  const showPrev = data.slice(data.length - 3);

  useEffect(() => {
    if (showPrev.length === 0) return;

    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % showPrev.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  let getBookClass = (bookIndex) => {
    if (showPrev.length === 0) return "";
    if (bookIndex === index) return scss.center;
    if (bookIndex === (index + 1) % showPrev.length) return scss.right;
    if (bookIndex === (index - 1 + showPrev.length) % showPrev.length)
      return scss.left;
    return "";
  };

  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.text}>
              <p> Топ 3 новых бестселлера, которые вдохновят тебя 📚 </p>
            </div>

            <div className={scss.button}>
              <button onClick={() => navigate("/books")} className={scss.add}>
                ПОСМОТРЕТЬ ВСЕ КНИГИ
              </button>
            </div>
          </div>
          <div className={scss.right}>
            {showPrev.map((item, idx) => (
              <div key={idx} className={`${scss.book} ${getBookClass(idx)}`}>
                <img src={item.imageURL} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
