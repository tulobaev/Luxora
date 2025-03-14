import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../context/AuthContext";
import { Tooltip } from "@mui/material";
import scss from "./Cart.module.scss";

const Cart = ({ item }) => {
  const { deleteDataBooks, getShowOne, getShowLikes } = useProduct();
  const { user } = useAuth();
  const navigate = useNavigate();
  //!
  const [likesColor, setLikesColor] = useState(true);
  const color = likesColor ? "" : "red";
  //!

  return (
    <>
      <div id={scss.cart}>
        <div className="container">
          <div className={scss.card}>
            <div className={scss.content}>
              <div
                onClick={() => navigate("/show", getShowOne(item._id))}
                className={scss.book}
              >
                <img
                  className={scss.image}
                  src="https://encrypted-tbn0.gstatic.com/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5cP2_JseTAErLEtSowope9q03VN9PTYdDl5GYTg87uHpml0D4JdqK8xg6MnNUHt3vt8&usqp=CAU?q=tbn:ANd9GcT819nyX9qLUgQLoHDqRP-oILrIEX4QskeuhA&s"
                  alt=""
                />
                <div className={scss.cover}>
                  <img src={item.imageURL} alt="" />
                </div>
              </div>
              <h3>{item.name}</h3>
              <div className={scss.buttons}>
                <p>{item.price} сом</p>
                <Tooltip
                  sx={{ color: color }}
                  onClick={() => {
                    getShowLikes(item._id);
                    setLikesColor(!likesColor);
                  }}
                  title="Добавить в избранное"
                >
                  <FavoriteIcon className={scss.FavoriteBorderIcon} />
                </Tooltip>
                {user ? (
                  user.email === "talgattulobaev519@gmail.com" ||
                  "batirovanurrahat3@gmail.com" ? (
                    <>
                      <Tooltip title="Удалить">
                        <DeleteIcon
                          className={scss.DeleteIcon}
                          onClick={() => deleteDataBooks(item._id)}
                        />
                      </Tooltip>
                      <Tooltip title="Редактировать">
                        <EditNoteIcon
                          className={scss.EditNoteIcon}
                          onClick={() => navigate(`/edit/${item._id}`)}
                        />
                      </Tooltip>
                    </>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
