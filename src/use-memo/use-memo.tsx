
import React, { useEffect, useMemo, useReducer } from "react";

const UsingUseMemo: React.FC = () => {
    const [tswitch, toggleSwitch] = useReducer((state: boolean) => {
        return !state
    }, false)

    useEffect(()=>{
        console.info("tswitch: ", tswitch)
    })

    const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

    const processedData: number[] = useMemo(() => {
        // Expensive computation or processing
        console.log("use memo function executed")
        return data.map(item => item * 2);
    }, []);

    return (
        <div>
            <p>
                Here's some information about useMemo and its benefits in React.js:
                <br />

                useMemo is a React hook that allows you to memoize expensive calculations so that they are only recomputed when their dependencies change. It takes a function and an array of dependencies and returns a memoized value.

                The primary benefit of useMemo is performance optimization. By memoizing the result of a function, React can avoid unnecessary recalculations when the component re-renders. This is particularly useful for computations that are CPU-intensive or involve heavy operations, such as complex calculations, filtering large arrays, or formatting data.

                When you use useMemo effectively, you can prevent unnecessary re-renders and improve the overall performance of your React application. It helps to ensure that your components only update when they actually need to, rather than every time the parent component re-renders.

                In summary, useMemo is a powerful tool for optimizing React applications by memoizing expensive computations, thereby reducing unnecessary work and improving performance.
            </p>
            <button className="btn btn-primary" onClick={toggleSwitch}> Click me </button>
            <i> processedData will not be executed</i>
            <ul>
                {
                    processedData.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default UsingUseMemo;