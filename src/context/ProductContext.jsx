import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  data: [],
  oneData: {},
  showProd: [],
  showLikes: JSON.parse(localStorage.getItem("likes")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  fullData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload, fullData: action.payload };
    case "FILTER":
      return { ...state, data: action.payload };
    case "GET_ONE_DATA":
      return { ...state, oneData: action.payload };
    case "SHOW_DATA":
      return { ...state, showProd: [action.payload] };
    //!
    case "SHOW_LIKES_DATA":
      const check = state.showLikes.some(
        (item) => item._id === action.payload._id
      );
      if (check) {
        return state;
      }
      const likesData = [...state.showLikes, action.payload];
      localStorage.setItem("likes", JSON.stringify(likesData));
      return { ...state, showLikes: likesData };
    case "DELETE_LIKES":
      return { ...state, showLikes: action.payload };
    //!
    case "BASKET_DATA":
      const basketSome = state.basket.some(
        (item) => item._id === action.payload._id
      );
      if (basketSome) {
        return state;
      }
      const basketData = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(basketData));
      return { ...state, basket: basketData };

    case "DELETE_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const API = "https://api-crud.elcho.dev/api/v1/99973-185f7-b0cad/bookData";

  //! CRUD
  async function addDataBooks(newData) {
    await axios.post(API, newData);
    readDataBooks();
  }

  async function readDataBooks() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_DATA",
      payload: data.data,
    });
    dispatch({
      type: "SET_FULL_DATA",
      payload: data.data,
    });
  }

  async function deleteDataBooks(id) {
    await axios.delete(`${API}/${id}`);
    readDataBooks();
  }

  async function getOneDataBooks(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_DATA",
      payload: data.data,
    });
  }

  async function editDataBooks(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API}/${id}`, editedProduct);
    readDataBooks();
  }
  //! CRUD

  //! SEARCH
  function searchBooks(searchValue) {
    let result = state.data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.price.toString().includes(searchValue.toLowerCase()) ||
        item.author.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch({
      type: "GET_DATA",
      payload: result,
    });
    if (!searchValue) {
      readDataBooks();
    }
  }
  //! SEARCH

  //!PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(state.data.length / itemPerPage);

  function currentPage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return state.data.slice(start, end);
  }
  //!PAGINATION

  //! SHOW PAGE
  async function getShowOne(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "SHOW_DATA",
      payload: data.data,
    });
  }
  //! SHOW PAGE

  //! FAVORITE
  async function getShowLikes(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "SHOW_LIKES_DATA",
      payload: data.data,
    });
  }

  async function deleteOneShowLikes(id) {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    likes = likes.filter((item) => item._id !== id);
    localStorage.setItem("likes", JSON.stringify(likes));
    dispatch({
      type: "DELETE_LIKES",
      payload: likes,
    });
  }
  //! FAVORITE

  //! BASKET
  async function getOneBasket(id) {
    let data = await axios.get(`${API}/${id}`);
    dispatch({
      type: "BASKET_DATA",
      payload: data.data,
    });
  }

  async function deleteOneBasket(id) {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket = basket.filter((item) => item._id !== id);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "DELETE_BASKET",
      payload: basket,
    });
  }
  //! BASKET

  //! FILTER
  function filterProduct(value) {
    value = value.trim().toLowerCase();
    if (value === "все") {
      dispatch({
        type: "FILTER",
        payload: state.fullData,
      });
    } else {
      let result = state.fullData.filter(
        (item) => item.category.trim().toLowerCase() === value
      );
      dispatch({
        type: "FILTER",
        payload: result,
      });
    }
  }

  //! FILTER

  const values = {
    addDataBooks,
    data: state.data,
    readDataBooks,
    deleteDataBooks,
    getOneDataBooks,
    oneData: state.oneData,
    editDataBooks,
    searchBooks,
    searchData: state.searchData,
    setPage,
    count,
    currentPage,
    getShowOne,
    showProduct: state.showProd,
    getShowLikes,
    showLikes: state.showLikes,
    deleteOneShowLikes,
    getOneBasket,
    basket: state.basket,
    deleteOneBasket,
    filterProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
