import { useEffect, useState } from "react";

const LazyComponent: React.FC = () => {
    const [result, setResult] = useState<number>(0);

  
    useEffect(() => {
        let calculationResult = 0;
        for(let j=0; j < 10 ; j++)
        for (let i = 0; i < 100000000; i++) {
          calculationResult += i;
        }
        // Set the result in the state
        setResult(calculationResult);
    }, []);
  
    // Render the lazy component only when it's loaded
    return (
      <div>
        result : {result}
      </div>
    );
  };
  
  export default LazyComponent;