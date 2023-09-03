import { Button } from "./ui/button";
// import Quantity from "./quantity";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Quantity from "./ui/Quantity";
const Product = () => {
  const param = useParams();
  const [result, setResult] = useState();

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const response = await fetch(
        `http://fakestoreapi.com/products/${param.id}`
      );
      const data = await response.json();
      setResult(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="flex justify-center px-20">
       
            <div
              key={result?.id}
              className="flex  flex-col sm:flex-row sm:justify-between justify-center w-[700px] items-center gap-x-5 gap-y-7 py-20 max-w-[1500px] m-auto"
            >
              <div className="flex-1">
                <img
                  src={result?.image}
                  alt=""
                  width={350}
                  height={200}
                  className="h-[200px] w-[300px]"
                />
              </div>
              <div className="p-2 flex flex-col gap-y-3 flex-1 w-[80%]">
                <p className="text-sky-500 font-medium">
                  {result?.title}
                </p>
                <p>
                  Price: <span className="ml-5">${result?.price}</span>{" "}
                </p>
                <p>
                  Category:<span className="ml-5">{result?.category}</span>
                </p>
               <p className="flex">
                  Quantity:
                  <span className="ml-5">
                    <Quantity/>
                  </span>
                </p>
                <Button className="bg-sky-300 rounded text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300">
                  Add to Cart <ShoppingCart className="ml-3" />
                </Button>
              </div>
            </div>
          {/* );
        })} */}
      </div>
    </>
  );
};
export default Product;
