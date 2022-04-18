import React from "react";
import {Form, Col, Row, FormGroup, Button } from 'react-bootstrap'

const AddExpenseForm = () => {
    return(
        <Form className="mt-4">
            <Row>
                <Col>
                    <FormGroup>
                        <input
                            id="expenseName"
                            name="expense"
                            placeholder="Name"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <input
                            id="expenseCost"
                            name="password"
                            placeholder="Cost"
                            type="number"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <select className="form-select">
                            <option defaultValue="1">Food</option>
                            <option value="2">Clothes</option>
                            <option value="3">Travel</option>
                            <option value="4">Parties</option>
                            <option value="5">Home</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <input
                            id="expenseDate"
                            name="password"
                            placeholder="Date"
                            type="date"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <Button>
                        Add Expense
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddExpenseForm;