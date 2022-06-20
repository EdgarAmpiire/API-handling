import "./App.css";
import Form from "./components/Form";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="mx-5 h-screen" >
      <div className="mt-5">
        <Form />
        <div className="mt-5">
          
     <Posts />
    </div>
      </div>
    </div>
  );
}

export default App;
