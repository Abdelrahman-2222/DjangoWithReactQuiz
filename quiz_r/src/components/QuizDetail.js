// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faClock} from "@fortawesome/free-solid-svg-icons";
// import {faStar} from "@fortawesome/free-solid-svg-icons";
//
// const QuizDetail = ({quiz_id}) => {
//     const [quizData, setQuizData] = useState({});
//
//     useEffect(() => {
//         axios
//             .get(`http://localhost:8000/api/${quiz_id}/`)
//             .then((response) => {
//                 setQuizData(response.data.data);
//             })
//             .catch((error) => console.log(error));
//     }, [quiz_id]);
//
//     return (
//         <div className="container my-5">
//             <div className="card shadow">
//                 <div className="card-header">
//                     <h3 className="card-title">{quizData.title}</h3>
//                     <div className="d-flex">
//                         <div className="me-4">
//                             <FontAwesomeIcon icon={faClock}/>
//                             <span className="ms-2">{quizData.time_limit} min</span>
//                         </div>
//                         <div>
//                             <FontAwesomeIcon icon={faStar}/>
//                             <span className="ms-2">{quizData.difficulty}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card-body">
//                     <p className="card-text">{quizData.description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default QuizDetail;


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom';

const QuizDetail = () => {
    const {quizId} = useParams();
    const [quizData, setQuizData] = useState({});

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/${quizId}/`);
                setQuizData(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchQuizData();
    }, [quizId]);

    return (
        <div className="container my-5">
            <div className="card shadow">
                <div className="card-header">
                    <h3 className="card-title">{quizData.title}</h3>
                    <div className="d-flex">
                        <div className="me-4">
                            <FontAwesomeIcon icon={faClock}/>
                            <span className="ms-2">{quizData.time_limit} min</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar}/>
                            <span className="ms-2">{quizData.difficulty}</span>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{quizData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizDetail;
