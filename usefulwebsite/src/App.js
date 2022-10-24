import Button from "./Button";
const App = ()=>{
  return <div>
      <h1>Useful Website</h1>
      <h3>Which website do you want to open ?</h3>
      <Button name="Google" link="https://www.google.com"></Button>
      <Button name="React" link="https://reactjs.org/docs/getting-started.html"></Button>
      <Button name="BBC" link="https://www.bbc.co.uk/"></Button>   
  </div>
}
export default App;