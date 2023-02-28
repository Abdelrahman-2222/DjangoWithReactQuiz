// // import { Switch } from 'react-router-dom';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import QuizList from './components/QuizList';
// import QuizDetail from './components/QuizDetail';
// // import {useParams} from 'react-router-dom';
//
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route exact path="/" element={<QuizList/>}/>
//                 <Route exact path="/:quiz_id" element={<QuizDetail />} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;
//


// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import QuizList from './components/QuizList';
// import QuizDetail from './components/QuizDetail';
// import QuizCreate from "./components/QuizCreate";
//
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route exact path="/" element={<QuizList/>}/>
//                 <Route exact path="/:quizId" element={<QuizDetail/>}/>
//                 <Route exact path={"/create"} element={<QuizCreate/>} />
//             </Routes>
//         </Router>
//     );
// }
//
// export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import QuizList from './components/QuizList';
import QuizDetail from './components/QuizDetail';
import QuizCreate from './components/QuizCreate';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<QuizList/>}/>
                <Route path="/:quizId" element={<QuizDetail/>}/>
                <Route path="/create" element={<QuizCreate/>}/>
            </Routes>
        </Router>
    );
}

export default App;
