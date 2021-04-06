import React, {useEffect, useState} from 'react';
import {FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import {withStyles} from '@material-ui/core/styles';

const FilterCount = ({productList, callback}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        event.target.checked ? setChecked(true) : setChecked(false)
        // setState({ ...state, [event.target.name]: event.target.checked });
    };

    const sort = () => {
        const sort = productList.sort((a, b) => Number(a.product.count) > Number(b.product.count) ? -1 : 1)
        callback(sort)
    };

    useEffect(() => {
        sort();
    }, [checked])

    return (
        <FormGroup row>
            <FormControlLabel
                control={<GreenCheckbox
                    checked={checked}
                    onChange={handleChange}
                    name="checked"/>}
                label="Ascending sort"
            />
        </FormGroup>
    );
};

export default FilterCount;

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);