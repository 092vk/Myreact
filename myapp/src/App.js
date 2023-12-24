
import './App.css';

const myname="vivek";

const FirstComponent = () => {
  return(
    <>
      <h1>this is important all component elements must be inside a single root element </h1>

      <p>1.component name should start with capital letter<br/>
        2.return has smooth brackets ()<br/>
        3.all jxs element inside a single root element</p>

      <h2>name: vivek Kumar</h2>
      <h2>age:19</h2>
      <h2>grades : needs improvement</h2>
    </>
  );
};

const SecondComponent=()=>{
  return(
    <>
      <h1>welcome to my second root , i have made it on my own </h1>
      <h2> my name is ${myname} stupid we write $ dollar sign and curly braces in js when we need to use any other elemnt inside a string </h2>

    </>
  );
};
const App=() =>{
  const name ="shivam";
  const flag=false;
  return (
    <div><h1>hello react you are my first component , i am very happy making you </h1>

    <p>1.usually in a html we write class as a keyword , but in jsx we write className </p>

    <p>2.in jsx we write html and in curly braces we can write any js code , thux allowing us to write js in html </p>

    <p><h2>3.hello mr.{name} how are you doing . this is amazing because we are actually writing js directly as a html elements </h2></p>

    <p>4.here we are displaying name according to the value of flag , hello mr {flag?name:"someone"}, try changing the value of flag and you will see the magic we are actually writing logic directyly as a html components </p>

    <p>4.inserting react fragment  </p>
    {flag?(
      <>
      <h1>so this part runs js or html logic runs when flag is true {name}
      </h1>
      </>
    ):(
      <> //******* note here that we in both in if and else we are using the single root element becuz each component defined in react must be defined in a single component ********

      <p>
      while this runs when flag is false , the value of flag is {name}, we dont have acess to parameter here ;
      </p>
      </>
    )}



    <p>*********************************************************************************************************************</p>

    <p><h2>lecture 2 : learning about components</h2> </p>
    <div>we can make make many components and then we can import them in our main component or in some other component
    <FirstComponent/>
    </div>
     
     <div>
      this is my second component it displays the name and says hello to it 
      <SecondComponent/>

     </div>

    </div>
  );
}

export default App;
