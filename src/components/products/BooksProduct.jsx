import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import Loading from "../../loading/Loading";
import PaginationProduct from "../products/PaginationProduct";
import Cart from "../cart/Cart";
import scss from "./BooksProduct.module.scss";

const BooksProduct = () => {
  const { readDataBooks, currentPage, filterProduct } = useProduct();

  useEffect(() => {
    readDataBooks();
  }, []);

  return (
    <>
      <div className="container">
        <div id={scss.category}>
          <div className={scss.categoryContent}>
            <button onClick={() => filterProduct("все")}>Все</button>
            <button onClick={() => filterProduct("фантазия")}>Фантазия</button>
            <button onClick={() => filterProduct("современная проза")}>
              Современная проза
            </button>
            <button onClick={() => filterProduct("классика")}>Классика</button>
            <button onClick={() => filterProduct("мистика")}>Мистика</button>
            <button onClick={() => filterProduct("роман")}>Роман</button>
            <button onClick={() => filterProduct("литература")}>
              Литература
            </button>
          </div>
        </div>
        <div id={scss.cart}>
          {currentPage().length > 0 ? (
            currentPage().map((item) => <Cart item={item} key={item._id} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <PaginationProduct />
    </>
  );
};

export default BooksProduct;
