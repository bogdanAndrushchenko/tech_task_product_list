import React, {useContext} from "react";
import {Link} from "react-router-dom";

import s from "./ProductList.module.scss";
import defaultImage from "../../../images/defaultImg.jpg";
import {deleteProduct} from "../../../services/api_service";

const ProductList = ({productList}) => {
    console.log(productList)
    return (
        <>
            {productList && (
                <>
                    {productList.length > 0 ? (
                        <ul className={s.ProductGallery}>
                            {productList.map(({id, product: {name, imageUrl, count}}) => (
                                <li className={s.ProductGalleryItem} key={id}>
                                    <img
                                        src={
                                            imageUrl
                                                ? `${imageUrl}`
                                                : defaultImage
                                        }
                                        alt={name}
                                        className={s.ProductGalleryItemImage}
                                    />
                                    <Link to={`/product/${id}`}>
                                        <h3 className={s.TitleProduct}>
                                            {name ? name : "Any product"}
                                        </h3>
                                        <span>
                                            Count: {count ? count : "not available"}
                                        </span>

                                    </Link>
                                    <button
                                        type="button"
                                        className={s.Button}
                                        onClick={() => deleteProduct(id)}
                                    >
                                        Delete
                                    </button>

                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2 className={`${s.TitleHeader} ${s.NotFound}`}>Not
                            Found!!!</h2>
                    )}
                </>
            )}
        </>
    );
};


export default ProductList;
