import React, { useState } from "react";
import scss from "./AddBookForm.module.scss";
import { TextField } from "@mui/material";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  author: "",
  category: "",
  description: "",
  imageURL: "",
  price: "",
};

const AddBookForm = () => {
  const [inputValues, setInputValues] = useState(initialValue);
  const { addDataBooks } = useProduct();
  const navigate = useNavigate();

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
    addDataBooks(inputValues);
    navigate("/books");
  };

  return (
    <div id={scss.box}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.inputBox}>
            <h1>Добавление книг</h1>
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Название"
              variant="outlined"
              name="name"
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Автор"
              variant="outlined"
              name="author"
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Категория"
              variant="outlined"
              name="category"
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Описание"
              variant="outlined"
              name="description"
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Изображение"
              variant="outlined"
              name="imageURL"
            />
            <TextField
              onChange={checkingInputValue}
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Цена"
              variant="outlined"
              type="number"
              name="price"
            />
            <div className={scss.btnBox}>
              <button onClick={() => sendData()} className={scss.add}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
