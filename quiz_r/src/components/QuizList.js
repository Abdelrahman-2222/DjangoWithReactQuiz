// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
//
// const QuizList = () => {
//   const [quizList, setQuizList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//
//   useEffect(() => {
//     axios.get('http://localhost:8000/api/').then(response => {
//       setQuizList(response.data.data);
//       setIsLoading(false);
//     });
//   }, []);
//
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-5">Quiz List</h1>
//       {isLoading ? (
//         <div className="d-flex justify-content-center align-items-center">
//           <FontAwesomeIcon icon={faSpinner} spin size="3x" />
//         </div>
//       ) : (
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {quizList.map(quiz => (
//             <div className="col" key={quiz.id}>
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">{quiz.title}</h5>
//                   <p className="card-text">{quiz.description}</p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item">Time Limit: {quiz.time_limit} minutes</li>
//                   <li className="list-group-item">Difficulty: {quiz.difficulty}</li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default QuizList;


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faSpinner} from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-router-dom';
// import '../App.css';
//
// const QuizList = () => {
//     const [quizList, setQuizList] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchQuizList = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/');
//                 setQuizList(response.data.data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//
//         fetchQuizList();
//     }, []);
//
//     return (
//         <div className="container my-5">
//             <h1 className="text-center mb-5">Quiz List</h1>
//             {isLoading ? (
//                 <div className="d-flex justify-content-center align-items-center">
//                     <FontAwesomeIcon icon={faSpinner} spin size="3x"/>
//                 </div>
//             ) : (
//                 <div className="row row-cols-1 row-cols-md-3 g-4">
//                     {quizList.map((quiz) => (
//                         <div className="col" key={quiz.id ? `quiz-${quiz.id}` : `quiz-${quiz.title}`}>
//                             {/*<Link to={`/${quiz.id}`} className="quiz-link" key={`quiz-link-${quiz.id}`}>*/}
//                             {/*  {quiz.title}*/}
//                             {/*</Link>*/}
//                             {/* link each quiz with it's quiz detail page */}
//                             <Link to={`/${quiz.id}`} className="quiz-link" key={`quiz-link-${quiz.id}`}>
//                                 {quiz.title}
//                             </Link>
//
//                             {/*<Link to={`/${quiz.id}`} className="quiz-link" key={`quiz-link-${quiz.id}`}>*/}
//                             {/*    {quiz.title}*/}
//                             {/*</Link>*/}
//                             <div className="card-body" key={`card-body-${quiz.id}`}>
//                                 <h5 className="card-title">{quiz.title}</h5>
//                                 <p className="card-text">{quiz.description}</p>
//                             </div>
//                             <ul className="list-group list-group-flush" key={`list-group-${quiz.id}`}>
//                                 <li className="list-group-item" key={`time-limit-${quiz.id}`}>
//                                     <span className="list-label">Time Limit:</span> {quiz.time_limit} minutes
//                                 </li>
//                                 <li className="list-group-item" key={`difficulty-${quiz.id}`}>
//                                     <span className="list-label">Difficulty:</span> {quiz.difficulty}
//                                 </li>
//                             </ul>
//                         </div>
//                     ))}
//
//                 </div>
//             )}
//
//         </div>
//
//     );
// };
//
// export default QuizList;


// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faSpinner} from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-router-dom';
// import '../App.css';
//
// const QuizList = () => {
//     const [quizList, setQuizList] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         const fetchQuizList = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/');
//                 const quizListWithId = response.data.data.map((quiz, index) => ({...quiz, id: index}));
//                 setQuizList(quizListWithId);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//
//
//         fetchQuizList();
//     }, []);
//
//     return (
//         <div className="container my-5">
//             <h1 className="text-center mb-5">Quiz List</h1>
//             {isLoading ? (
//                 <div className="d-flex justify-content-center align-items-center">
//                     <FontAwesomeIcon icon={faSpinner} spin size="3x"/>
//                 </div>
//             ) : (
//                 quizList.length > 0 ? (
//                     quizList.map((quiz) => {
//                         console.log(quiz.id);
//                         return (
//                             <div className="col" key={quiz.id ? `quiz-${quiz.id}` : `quiz-${quiz.title}`}>
//                                 ...
//                             </div>
//                         );
//                     })
//
//                 ) : (
//                     <div>No quizzes found.</div>
//                 )
//             )}
//         </div>
//     );
//
// };
//
// export default QuizList;


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import '../App.css';


const QuizList = () => {
    const [quizList, setQuizList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuizList = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/');
                const quizListWithId = response.data.data.map((quiz, index) => ({...quiz, id: index + 1}));
                setQuizList(quizListWithId);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchQuizList();
    }, []);


    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">Quiz List</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x"/>
                </div>
            ) : (
                quizList.length > 0 ? (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {quizList.map((quiz) => (
                            <div className="col" key={quiz.id ? `quiz-${quiz.id}` : `quiz-${quiz.title}`}>
                                <Link to={`/${quiz.id}`} className="quiz-link">
                                    {quiz.title}
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{quiz.title}</h5>
                                    <p className="card-text">{quiz.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="list-label">Time Limit:</span> {quiz.time_limit} minutes
                                    </li>
                                    <li className="list-group-item">
                                        <span className="list-label">Difficulty:</span> {quiz.difficulty}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>No quizzes found.</div>
                )
            )}
        </div>
    );
};

export default QuizList;
