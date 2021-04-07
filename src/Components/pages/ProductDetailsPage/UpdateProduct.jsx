import React, {useState} from 'react';
import {Button, InputLabel, FormControl, Input} from "@material-ui/core";
import {Modal} from "react-bootstrap";
import Button_ from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {updateProduct} from "../../../services/api_service";
import {toast} from "react-toastify";
// import {addProduct} from "../../services/api_service";

const UpdateProductForm = ({product, id}) => {

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState(product.name);
    const [count, setCount] = useState(product.count);
    const [width, setWidth] = useState(product.size.width);
    const [height, setHeight] = useState(product.size.height);
    const [weight, setWeight] = useState(product.weight);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const handleInputChange = ({target: {name, value}}) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'count':
                setCount(value);
                break;
            case 'width':
                setWidth(value);
                break;
            case 'height':
                setHeight(value);
                break;
            case 'weight':
                setWeight(value);
                break;
        }
    };
    const validatorInput = () => {
        if (!weight || !height || !width || !count || !name) {
            toast.error('Any field is entry. Try again!', {
                autoClose: 4000,
                position: 'top-center',
            });
            return false;
        }
        return true;
    };

    const resetForm = () => {
        setName('');
        setCount("");
        setWidth("");
        setHeight("");
        setWeight("");
    };

    const edit = (e) => {
        e.preventDefault();
        const formIsValid = validatorInput();
        if (!formIsValid) {
            return;
        }
        updateProduct(id, name, count, width, height, weight);
        resetForm();
        closeModal();
    }
    return (
        <>
            <Button
                type="button"
                onClick={openModal}
                variant="outlined"
                color="primary">
                Edit
            </Button>
            <Modal show={isOpen} onHide={closeModal} centered backdrop="static">
                <Modal.Header closeButton>Add product</Modal.Header>
                <Modal.Body>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Product name</InputLabel>
                        <Input
                            id="name"
                            name="name"
                            autoFocus
                            onChange={handleInputChange}
                            value={name}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="count">Enter product
                            quantity</InputLabel>
                        <Input
                            id="count"
                            name="count"
                            type="number" min="0"
                            autoFocus
                            onChange={handleInputChange}
                            value={count}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="width">Enter width
                            product </InputLabel>
                        <Input
                            id="width"
                            name="width"
                            type="number" min="0"
                            autoFocus
                            onChange={handleInputChange}
                            value={width}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="height">Enter height
                            product</InputLabel>
                        <Input
                            id="height"
                            name="height"
                            type="number" min="0"
                            autoFocus
                            onChange={handleInputChange}
                            value={height}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="weight">Enter product
                            weight</InputLabel>
                        <Input
                            id="weight"
                            name="weight"
                            type="number" min="0"
                            autoFocus
                            onChange={handleInputChange}
                            value={weight}
                        />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer>
                    <Button_ variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button_>
                    <Button_ variant="primary" onClick={edit}>
                        Save Changes
                    </Button_>
                </Modal.Footer>
            </Modal>

        </>

    );
};

export default UpdateProductForm;