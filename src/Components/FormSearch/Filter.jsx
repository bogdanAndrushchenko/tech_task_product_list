import React, { useState } from "react";
import { toast } from "react-toastify";

import s from "./FormSearch.module.scss";

const Filter = ({ onFormSubmit }) => {
  const [searchProduct, setSearchProduct] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchProduct(value.toLowerCase());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchProduct.trim() === "") {
      toast.error("Please enter request", { autoClose: 2000 });
      return;
    }
    onFormSubmit(searchProduct);
    resetForm();
  };

  const resetForm = () => {
    setSearchProduct("");
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmitForm}>
      <button type="submit" className={s.SearchForm_button}>
        <span className={s.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={s.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search product"
        name="searchProduct"
        value={searchProduct}
        onChange={handleInputChange}
      />
    </form>
  );
};


export default Filter;
