import React, {useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {Form, Button, Alert} from "react-bootstrap";
import '../App.css';

const QuizCreateForm = () => {
    const [quiz, setQuiz] = useState({
        title: "",
        description: "",
        time_limit: "",
        difficulty: "",
        owner: "",
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setQuiz((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/create/", quiz)
            .then((response) => {
                setShowAlert(true);
                setQuiz({
                    title: "",
                    description: "",
                    time_limit: "",
                    difficulty: "",
                    owner: "",
                });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <h1 className="text-center my-5">Quiz Create</h1>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Quiz created successfully.
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={quiz.title}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={quiz.description}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="time_limit">
                    <Form.Label>Time Limit</Form.Label>
                    <Form.Control
                        type="text"
                        name="time_limit"
                        value={quiz.time_limit}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="difficulty">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Control
                        as="select"
                        name="difficulty"
                        value={quiz.difficulty}
                        onChange={handleInputChange}
                        required
                        className="difficulty-select"
                    >
                        <option value="" disabled>
                            Choose difficulty...
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="owner">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control
                        type="text"
                        name="owner"
                        value={quiz.owner}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formSaveButton">
                    <Button variant="primary" type="submit" className="mt-2">
                        <FontAwesomeIcon icon={faSave} className="highlight"/>
                        Save
                    </Button>
                </Form.Group>

            </Form>
        </div>
    );
};

export default QuizCreateForm;
