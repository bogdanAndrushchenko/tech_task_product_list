import React, {useState, useEffect, useContext} from "react";

import Filter from "../../FormSearch";
import ProductList from "../ProductList";
import {getAllProductList} from "../../../services/api_service";


const HomePage = ({productList}) => {
    const [searchProduct, setSearchProduct] = useState("");

    const onFormSubmit = (product) => {
        setSearchProduct(product);
    };
    console.log(productList)
    return (
        <>
            <Filter onFormSubmit={onFormSubmit}/>

            {/*{searchProduct && (*/}
            <ProductList
                productList={productList}
                titleHeader={`Your search: ${searchProduct}`}
            />
            {/*)}*/}
        </>
    );
};

export default HomePage;
