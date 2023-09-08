import List from "./Tasklist";
import { LoginForm } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {

    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="list" element={<List/>}/>
                <Route path="login" element={<LoginForm/>}/>

            </Routes>
            </BrowserRouter>
        </div>
    )

}