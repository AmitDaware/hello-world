// import logo from "./logo.svg";
import "./App.css";
// import PortalDemo from "./components/PortalDemo";
// import FRParentInput from "./components/FRParentInput";
import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreetings from "./components/UserGreetings";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./components/Inline";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import FragmentDemo from "./components/FragmentDemo";
// import Table from "./components/Table";
// import PureComp from "./components/PureComp";
// import ParentComp from "./components/ParentComp";
// import RefsDemo from "./components/RefsDemo";
// import FocusInput from "./components/FocusInput";
// import Hero from "./components/Hero";
// import ErrorBoundry from "./components/ErrorBoundry";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ClickCounter2 from "./components/ClickCounter2";
// import HoverCounter2 from "./components/HoverCounter2";
// import User from "./components/User";
// import Counter2 from "./components/Counter2";
// import ComponentC from "./components/ComponentC";
// import { UserProvider } from "./components/userContext";

function App() {
  //❗❗ IF YOU WANT TO RETURN MORE THEN ONE ELEMENT THEN YOU WILL HAVE TO WRAP ALL THE CONTENT IN ONE SINGLE CONTAINER.... ❗❗

  return (
    <div className="App">
      {/* <UserProvider value = "AMIT">
        <ComponentC />
      </UserProvider> */}

      {/* <Counter2 render={(count, incrementCount)=>(
        <ClickCounter2 count={count} incrementCount = {incrementCount} />
      )}/> */}
      {/* <Counter2 render={(count, incrementCount)=>(
        <HoverCounter2 count={count} incrementCount = {incrementCount} />
      )}/> */}

      {/* <HoverCounter2 /> */}

      {/* <ClickCounter2/> */}

      {/* <User name = {(isLoggedIn) => isLoggedIn ? 'AMIT' : 'Guest'} /> */}

      {/* <HoverCounter /> */}

      {/* <ClickCounter name='Amit'/> */}

      {/* <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry> */}

      {/* <ErrorBoundry>
        <Hero heroName="Superman" />
      </ErrorBoundry> */}

      {/* <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry> */}

      {/* <PortalDemo/> */}

      {/* <FRParentInput/> */}

      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}

      {/* <ParentComp /> */}

      {/* <PureComp /> */}

      {/* <Table/> */}

      {/* <FragmentDemo/> */}

      {/* <LifecycleA/> */}

      {/* <Form/> */}

      {/* <h1 className = 'error'>Error</h1>   */}

      {/* <h1 className = {styles.success}>Success</h1> */}

      {/* <Inline/> */}

      {/* <Stylesheet primary = {true}/> */}

      {/* <NameList/> */}

      {/* <UserGreetings/> */}

      {/* <ParentComponent/> */}

      {/* <EventBind/> */}

      {/* <ClassClick/> */}

      {/* <FunctionClick /> */}

      {/* <Counter/> */}

      {/* <Message/> */}
      
      <Greet name="Tony" heroName="IronMan">
        <p>Multi Millionair PlayBoy</p>
      </Greet>
      <Greet name="Rogers" heroName="Captain America">
        <button>Experiment</button>
      </Greet>
      <Greet name="Natasha" heroName="Black Widow">
        <p>Killer Beauty</p>
      </Greet>

      {/* <Welcome name="Bruce" heroName="BatMan"></Welcome>
      <Welcome name="Diana" heroName="WonderWomen"></Welcome>
      <Welcome name="Clerk" heroName="SuperMan"></Welcome> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
