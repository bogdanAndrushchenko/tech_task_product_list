import React, {useState, useEffect, useContext} from "react";

import Filter from "../../FormSearch";
import ProductList from "../ProductList";
import {getAllProductList} from "../../../services/api_service";
import FilterCount from "../../FormSearch/FilterCount";


const HomePage = ({productList}) => {
    const [searchProduct, setSearchProduct] = useState("");
    const [listQuantityFilter, setListQuantityFilter] = useState([]);

    const onFormSubmit = (product) => {
        setSearchProduct(product);
    };
    return (
        <>
            <Filter onFormSubmit={onFormSubmit}/>
            <FilterCount productList={productList}
                         callback={setListQuantityFilter}/>

            {/*{searchProduct && (*/}
            <ProductList
                productList={(listQuantityFilter.length !== 0)
                    ? listQuantityFilter
                    : productList}
                // titleHeader={`Your search: ${searchProduct}`}
            />
            {/*)}*/}
        </>
    );
};

export default HomePage;
