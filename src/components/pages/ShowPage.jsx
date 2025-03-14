import React from "react";
import { useProduct } from "../../context/ProductContext";
import scss from "./ShowPage.module.scss";
import { Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ShowPage = () => {
  const { showProduct, getShowLikes, getOneBasket } = useProduct();
  const navigate = useNavigate();

  return (
    <div id={scss.page}>
      <div className="container">
        <ArrowBackIcon
          sx={{ fontSize: "40px", marginBlock: "10px", cursor: "pointer" }}
          onClick={() => navigate("/books")}
        />
        <div className={scss.box}>
          {showProduct.map((item, index) => (
            <div key={index} className={scss.card}>
              <div>
                <img src={item.imageURL} alt="image" />
              </div>
              <div className={scss.information}>
                <h5>{item.author}</h5>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className={scss.price}>
                  <div>
                    <img src={item.imageURL} alt="image" />
                    <h3>Бумажная</h3>
                  </div>
                  <h3>{item.price} Сом</h3>
                </div>
                <div className={scss.basketButton}>
                  <button onClick={() => getOneBasket(item._id)}>
                    Добавить в корзину
                  </button>
                  <Tooltip
                    onClick={() => getShowLikes(item._id)}
                    title="Добавить в избранное"
                  >
                    <FavoriteIcon className={scss.FavoriteBorderIcon} />
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
