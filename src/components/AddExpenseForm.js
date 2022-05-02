import React, {useState, useContext} from "react";
import {Form, Col, Row, FormGroup, Button } from 'react-bootstrap';
import AppContext from "../context/AppContext";



const AddExpenseForm = () => {

    const {setExpenses} = useContext(AppContext);

    const [form, setForm] = useState({
        name: "",
        cost: 0,
        category: "",
        date: ""
    });

    const handleChange = ({ target: {name, value}}) => {
        setForm(prev=> ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3005/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(r => r.json())
          .then(expense => setExpenses(prev => ([
            ...prev,
            expense
        ])))
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
                            value={parseInt(form.cost)}
                            className="form-control"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <select
                            onChange={handleChange}
                            required="required"
                            name="category"
                            className="form-control"
                            value={form.category}>
                                <option value="Food">Food</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Home">Home</option>
                                <option value="Travel">Travel</option>
                        </select>
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
    </>
    )
}

export default AddExpenseForm;