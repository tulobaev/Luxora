import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Tooltip } from "@mui/material";
import scss from "./ShowLike.module.scss";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Loading from "../../loading/Loading";

const ShowLike = () => {
  const { showLikes, readDataBooks, deleteOneShowLikes, getOneBasket } =
    useProduct();

  useEffect(() => {
    readDataBooks();
  });

  return (
    <div id={scss.cart}>
      <div className="container">
        <div className={scss.totalPrice}>
          <h2>В избранном {showLikes.length}</h2>
        </div>
        <div className={scss.product}>
          <h3>Товары в избранном:</h3>
        </div>
        <div className={scss.card}>
          {showLikes.length > 0 ? (
            showLikes.map((item) => (
              <div key={item._id} className={scss.content}>
                <div className={scss.book}>
                  <img
                    className={scss.image}
                    src="https://encrypted-tbn0.gstatic.com/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5cP2_JseTAErLEtSowope9q03VN9PTYdDl5GYTg87uHpml0D4JdqK8xg6MnNUHt3vt8&usqp=CAU?q=tbn:ANd9GcT819nyX9qLUgQLoHDqRP-oILrIEX4QskeuhA&s"
                    alt=""
                  />
                  <div className={scss.cover}>
                    <img src={item.imageURL} alt={item.name} />
                  </div>
                </div>
                <h3>{item.name}</h3>
                <div className={scss.buttons}>
                  <p>{item.price}$</p>

                  <Tooltip title="Удалить из избранного">
                    <FavoriteIcon
                      className={scss.FavoriteBorderIcon}
                      onClick={() => {
                        deleteOneShowLikes(item._id);
                      }}
                    />
                  </Tooltip>

                  <Tooltip
                    onClick={() => getOneBasket(item._id)}
                    title="Добавить в корзину"
                  >
                    <LocalMallIcon />
                  </Tooltip>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowLike;
