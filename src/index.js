import ReactDOM from "react-dom/client";
import App from "./App";

import './index.css';
import { AuthContextProvider } from "./components/context/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><App /></AuthContextProvider>);