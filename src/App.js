import React, {useState, useEffect, lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

import Container from "./Components/Container";
import AppNavBar from "./Components/AppNavBar";
import Loader from "./Components/Loader";

// import { getTrending } from "./API_service/api_service";
import "react-toastify/dist/ReactToastify.css";
import {getAllProductList} from "./services/api_service";

const HomePage = lazy(() =>
    import("./Components/pages/HomePage" /*webpackChunkName:"movie-page"*/)
);
const ProductDetailsPage = lazy(() =>
    import("./Components/pages/ProductDetailsPage" /*webpackChunkName:"movie-details-page"*/)
);

function App() {
    const [productList, setProductList] = useState([])


    useEffect(() => {
        getAllProductList(setProductList)
    }, []);

    return (
        <Container>
            <AppNavBar/>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage productList={productList}/>
                    </Route>
                    <Route path="/product/:product_id">
                        <ProductDetailsPage productList={productList}/>
                    </Route>
                </Switch>
            </Suspense>
            <ToastContainer/>
        </Container>
    );
}

export default App;
