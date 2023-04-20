import "./App.css";
import { useEffect, useState } from "react";
import Bbq from "./components/BBQ/Bbq";
import Home from "./components/Home/Home";
import { SyncLoader, BounceLoader } from "react-spinners";



export const App = () => {
  const [bbqs, setBbq] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingone, setLoadingone] = useState(false);
  const [carts, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setLoadingone(true);
    setTimeout(() => {
      setLoadingone(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetch("bbq.json")
      .then((res) => res.json())
      .then((data) => setBbq(data));
  });

  const hancleAddToCart = (bbq) =>{
    const newCart = [...carts, bbq]
    setCart(newCart)
  }

  return (
    <>
      {loading ? (
        <div className="spinner">
          <BounceLoader color="#000000" />
        </div>
      ) : (
        <>
          <Home
          carts = {carts}
          
          ></Home>
          
          {loadingone ? (
            <div className="spinner">
              <SyncLoader color="#000000" />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4" >
              {bbqs.map((bbq) => (
                <Bbq 
                key={bbq.id} 
                bbq={bbq}
                hancleAddToCart = {hancleAddToCart}
                
                ></Bbq>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default App;
