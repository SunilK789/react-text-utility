import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#364a68";
      showAlert("Dark mode activated!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated!", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            showAlert={showAlert}
          />
          <About /> */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
