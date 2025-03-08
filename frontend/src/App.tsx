import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog/:id" element={<>temp</>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
