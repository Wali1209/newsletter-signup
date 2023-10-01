import NewsLetter from "./components/NewsLetter";
import Success from "./components/Success";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

// react animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isSubscribe, setSubscribe] = useState(false);
  const [userEmail, setUserEmail] = useState("email@company.com");

  const handleSubmitForm = (email) => {
    setUserEmail(email);
    setSubscribe(true);
  };
  const handleDismiss = () => {
    setSubscribe(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {!isSubscribe && (
        <main data-aos="fade-up">
          <NewsLetter handleSubmitForm={handleSubmitForm} />
        </main>
      )}
      {isSubscribe && (
        <section data-aos="fade-down">
          <Success userEmail={userEmail} handleDismiss={handleDismiss} />
        </section>
      )}
    </>
  );
}

export default App;
