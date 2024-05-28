import Hero from "./components/Hero";
import SignIn from "./components/SignIn"
import { useCustomContext } from "./context/TestContext";

function App() {
  const { isLoggedin } = useCustomContext();

  return (
    <>
      {
        isLoggedin ? <Hero /> :
          <SignIn />
      }
    </>
  )
}

export default App