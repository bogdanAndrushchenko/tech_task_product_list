import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import UpdateProductForm from "./UpdateProduct";
import defaultImage from "../../../images/defaultImg.jpg";
import s from "./ProductDetailsPage.module.scss";

const ProductDetailsPage = ({productList}) => {
    const [product, setProduct] = useState(null);
    const {product_id} = useParams();

    useEffect(() => {
        getProduct();
    }, [productList]);

    const getProduct = () => {
        const product = productList.find(({id}) => id === product_id);
        product && setProduct(product.product)
    };

    return (
        <>
            {product && (
                <div className={s.details}>
                    <h1 className={s.title}>{product.name}</h1>
                    <p className={s.title}>Count: {product.count}</p>
                    <img
                        src={
                            product.imageUrl
                                ? product.imageUrl
                                : defaultImage
                        }
                        alt="movie"
                        className={s.details__img}
                    />
                    <p className={s.title}>Size -
                        <br/>
                        <span className={s.comments__item}>
                            Width : {product.size.width}
                        </span>
                        <br/>
                        <span className={s.comments__item}>
                            Height : {product.size.height}
                        </span>
                        <br/>
                        <span className={s.comments__item}>
                            Weight : {product.weight}
                        </span>
                    </p>
                    <UpdateProductForm product={product} id={product_id}/>
                    <p className={s.comments}>
                        Comments:
                        <br/>
                        <p className={s.comments__item}>
                            {product.comments.length > 0
                                ? product.comments.map(({id, name}) => (
                                    <span key={id}>{`${name}, `}</span>))
                                : "No comments"}
                        </p>
                    </p>
                </div>
            )}
        </>
    );
};

export default ProductDetailsPage;
