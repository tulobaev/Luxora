import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import scss from "./Basket.module.scss";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../../loading/Loading";

const Basket = () => {
  const { basket, readDataBooks, deleteOneBasket } = useProduct();
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const newTotalPrice = basket.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [basket]);

  useEffect(() => {
    readDataBooks();
  }, []);

  return (
    <div id={scss.basket}>
      <div className="container">
        <div className={scss.totalPrice}>
          <h2>
            В корзине {basket.length} товар на {totalPrice} сом
          </h2>
        </div>
        <div className={scss.product}>
          <h3>Товары в корзине</h3>
        </div>
        <div className={scss.basket}>
          {basket.length > 0 ? (
            basket.map((item, index) => (
              <div key={index} className={scss.basketCard}>
                <div className={scss.imageBox}>
                  <div>
                    <img src={item.imageURL} alt="image" />
                  </div>
                  <div className={scss.text}>
                    <div>
                      <span>{item.author}</span>
                      <p>{item.name}</p>
                    </div>
                    <div className={scss.buttonIncrease}>
                      <button onClick={() => setCount(count - 1)}>-</button>
                      <h3>{count}</h3>
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                  </div>
                </div>

                <div className={scss.priceButtonDelete}>
                  <h2>{item.price}$</h2>
                  <Tooltip title="Убрать из корзины">
                    <DeleteIcon
                      className={scss.DeleteIcon}
                      onClick={() => deleteOneBasket(item._id)}
                    />
                  </Tooltip>
                </div>
              </div>
            ))
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
