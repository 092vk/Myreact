import {useState} from 'react'
// we need to import the useState hook from the react library 


import './App.css';

const FirstProp=(props)=>{
  return (
    <>
      <h1>this is my first prop </h1>
      <h2>NAME: {props.name}</h2>
      <h4>LAST NAME: {props.last}</h4>
      <h4>AGE: {props.age} </h4>
    </>
  );
};


const App = () => {
  //here we are defining the react state 

  //whenever we call a function with use as its precedence name , that is hook 
  
  //myfirst state
  const [counter,setCounter]= useState(0);
  //inside useState(here we put the initial value )
  //couter is the element argument and setCounter is the function that will change the state 

  //defining the counter2
  const [counter2,setCounter2]=useState(8);

  return (
    <>
    <h1>lecture2 we are going to learn about props today</h1>
    <h2>props allow us to send input or arguments inside the components allowing us to use the component with different types of arguments many times  </h2>

    <FirstProp name={"vivek"} last={"kumar"} age={20} />
    <FirstProp/>
    //if we dont provide the arguments the fields provided will remain empty 
    <FirstProp name={"shivam"} last={"chaurasia"}  age={19}/>
    <FirstProp name="shubham" last= "gupta" age={20}/>
    <FirstProp name = {"sunny"} last={"singh"} age = "19" />
    
    *** if we are not doing anytype of proccessing inside the arguments then we can ignore the curly barackets ******

    we have successfully created our first props based components in react 









    ****************************************************************************************************
    **************************************************
    **************************************************



        <h1>Now we will learn about react states</h1>
        <p>the question arise why do we learn about states , what they do and why do we need them 
        </p>

        <p>why: lets say we want to implement a counter inside our app , now the state or counter of our html needs to change continuously with respect to some event , this is here state comes in , we will be changing the state of individual components without affecting the whole page or anyother html element</p>

        <div className='counter' style={{textAlign: 'center'}}>
          <button onClick={ () => setCounter((prevCount)=>prevCount-1)}>-</button>
          <h1>{counter}</h1>
          <button onClick={()=>{setCounter((prevCount) => prevCount+1 )}}>+</button>
        </div>

        <h1>hello counter2 </h1>

        <div className='counter2' style ={{textAlign:'center'}}>
          <button onClick={()=>setCounter2((prevCounter2)=>prevCounter2+1)}>+</button>
          <h1>{counter2}</h1>
          <button onClick={()=>setCounter2((prevCount2)=>prevCount2-1)}>-</button>
        </div>
        










    ****************************************************************************************************
    **************************************************
    **************************************************
    
    <h1>so we have learned one of the most common used hook called useState , which is responsible for changing the state of a component without affecting anyother component</h1>

    <h1>Now we will see one more hook called useEffect</h1>




    </>
  );
}

export default App;
