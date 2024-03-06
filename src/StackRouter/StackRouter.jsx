import { Route, Routes } from "react-router-dom";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import Home from "../Components/Home/Home";
import Answer from "../Components/Forum/Answer";
import MyQuestion from "../Components/Question/MyQuestion";
import MyAnswer from "../Components/Answer/MyAnswer";
import QuestionsAnswer from "../Components/Answer/QuestionsAnswer";

export default function StackRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<Register />}/>

            <Route path="questions/all" element={<Home />} />
            <Route path="questions" element={<MyQuestion />} />

            <Route path="/answers/:id" element={<QuestionsAnswer />} /> 
            <Route path="/answers/my" element={<MyAnswer />} /> 
        </Routes>
    );
}