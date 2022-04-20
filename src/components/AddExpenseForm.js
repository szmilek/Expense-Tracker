import React, {useContext, useEffect, useState} from "react";
import {Form, Col, Row, FormGroup, Button } from 'react-bootstrap';
import Select from "react-select";
import {AppContext} from "../context/AppContext";
import {v4 as uuidv4} from "uuid";



const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);

    const [form, setForm] = useState({
        name: "",
        cost: 0,
        category: "",
        date: ""
    });

    const [data, setData] = useState([])

    // const [name, setName] = useState("");
    // const [cost, setCost] = useState("");
    // const [category, setCategory] = useState("");
    // const [date, setDate] = useState("");

    // const options = [
    //     {value: "food", label: "Food" },
    //     {value: "clothes", label: "Clothes" },
    //     {value: "home", label: "Home" },
    //     {value: "travel", label: "Travel" }
    // ]

    useEffect(() => {
        fetch("http://localhost:3005/expenses")
            .then(r => r.json())
            .then(data => setData(data))
    }, [])


    const handleChange = ({ target: {name, value}}) => {
        setForm(prev=> ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch("http://localhost:3005/expenses", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(form)
        // }).then(r => r.json()).then(expense => setData(prev => ([
        //     ...prev,
        //     expense
        // ])))

        const expense = {
            id: uuidv4(),
            name: form.name,
            cost: parseInt(form.cost),
            category: form.category,
            date: form.date
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        })
    }

    return(
        <>
        <Form onSubmit={handleSubmit} className="mt-4 list-group-item">
            <Row className="d-flex justify-content-center align-items-center">
                <Col>
                    <FormGroup>
                        <input
                            id="expenseName"
                            name="name"
                            placeholder="Name"
                            type="text"
                            required="required"
                            onChange={handleChange}
                            value={form.name}
                            className="form-control"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <input
                            id="expenseCost"
                            name="cost"
                            placeholder="Cost"
                            type="number"
                            required="required"
                            onChange={handleChange}
                            value={form.cost}
                            className="form-control"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <select
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            value={form.category}>
                                <option value="food">Food</option>
                                <option value="clothes">Clothes</option>
                                <option value="home">Home</option>
                                <option value="travel">Travel</option>
                        </select>
                        {/*<Select*/}
                        {/*    id="expenseCategory"*/}
                        {/*    name={category}*/}
                        {/*    placeholder="Category"*/}
                        {/*    options={options}*/}
                        {/*    onChange={e=> setCategory(e)}*/}
                        {/*/>*/}
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <input
                            id="expenseDate"
                            name="date"
                            placeholder="Date"
                            type="date"
                            required="required"
                            onChange={handleChange}
                            value={form.date}
                            className="form-control"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <Button type="submit" variant="dark">
                        Add Expense
                    </Button>
                </Col>
            </Row>
        </Form>
    {/*{data?.map(({id, name, cost, category, date}) => (*/}
    {/*    <div key={id}>{name}{cost}{category}{date}</div>*/}
    {/*))}*/}
    </>
    )
}

export default AddExpenseForm;