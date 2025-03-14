import React, { useEffect, useState } from "react";
import scss from "./AddBookForm.module.scss";
import { TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

const initialValue = {
  name: "",
  author: "",
  category: "",
  description: "",
  imageURL: "",
  price: "",
};

const EditProduct = () => {
  const [inputValues, setInputValues] = useState(initialValue);
  const { getOneDataBooks, oneData, editDataBooks } = useProduct();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneDataBooks(id);
  }, []);

  useEffect(() => {
    if (oneData) {
      setInputValues(oneData);
    }
  }, [oneData]);

  const checkingInputValue = (e) => {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: Number(e.target.value) };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  };

  const sendData = () => {
    if (Object.values(inputValues).some((value) => value === "")) {
      alert("Заполните поле!!!");
      return;
    }
    editDataBooks(id, inputValues);
    navigate("/books");
  };

  return (
    <div id={scss.box}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inputBox}>
            <h1>Изменение книг</h1>
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Название"
              variant="outlined"
              name="name"
              value={inputValues.name}
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Автор"
              variant="outlined"
              name="author"
              value={inputValues.author}
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Категория"
              variant="outlined"
              name="category"
              value={inputValues.category}
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Описание"
              variant="outlined"
              name="description"
              value={inputValues.description}
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Изображение"
              variant="outlined"
              name="imageURL"
              value={inputValues.imageURL}
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Цена"
              variant="outlined"
              type="number"
              name="price"
              value={inputValues.price}
            />
            <div className={scss.btnBox}>
              <button onClick={() => sendData()} className={scss.add}>
                Изменить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
