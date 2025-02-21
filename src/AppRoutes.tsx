import { Route, Routes } from "react-router";
import { Chatbot } from "./pages/chatbot/Chatbot";
import { Diary } from "./pages/diary/Diary";
import { Profile } from "./pages/profile/Profile";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Chatbot />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/profile" element={<Profile />} /> 
        </Routes>
    );
}