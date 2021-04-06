import {firestore} from "../index";

export const getAllProductList = (callback) => {
    firestore.collection("product").onSnapshot(queryShapShot => {
        callback(
            queryShapShot.docs.map(doc => ({
                id: doc.id,
                product: doc.data({}),
            }))
        )

    })

};

export const addProduct = (name, count, width, height, weight) => {
    firestore.collection("product").add({
        imageUrl: null,
        name,
        count,
        size: {
            width,
            height,
        },
        weight,
        comments: []
    })
};

export const updateProduct = (id, name, count, width, height, weight) => {
    firestore.collection("product").doc(id).update({
        name, count, width, height, weight
    });
};

export const deleteProduct = (id) =>{
    firestore.collection("product").doc(id).delete();
}