import React, { useState } from 'react';
import './App.scss';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import Tabs from '../components/Tabs';

import Home from '../components/home/Home';
import User from '../components/user/User';
import Contact from '../components/contact/Contact';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/AuthContext';

import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import classes from '*.module.css';
import Blog from './Blog/Blog';
import { BrowserRouter } from 'react-router-dom';
import Counter from '../containers/Counter/Counter';
import Todo from '../components/Hooks-components/Todo';
import Forms from '../components/Forms/Forms';
import Header from '../components/Hooks-components/Header';
import Auth from '../components/Hooks-components/Auth';
import Auth_Context from '../components/Hooks-components/Auth-context'

// class App extends Component{
//   constructor(props: any) {
//     super(props);
//     console.log('[App.tsx] constructor');
//   }
//   state = {
//     className: [
//       { id: '1', name: 'selva', age: 40 },
//       { id: '2', name: 'raja', age: 80 },
//       { id: '3', name: 'shiva', age: 60 }
//     ],
//     showPerson: false,
//     showCockpit: true,
//     changeCounter: 0,
//     authenticate: false
//   };

//   // static getDerivedStateFromProps(props: any, state: any) {
//   //   console.log('[App.tsx] getDerivedStateFromProps', props);
//   //   return state;
//   // }

//   // componentDidMount() {
//   //   console.log('[App.tsx] componentdidmount');
//   // }

//   // shouldComponentUpdate(nextProps: any, nextState: any) {
//   //   console.log('[App.tsx] shouldcomponentupdate');
//   //   return true;
//   // }

//   // componentDidUpdate() {
//   //   console.log('[App.tsx] componentdidupdate');
//   // }

//   // clickEventHandler = (newName: any) =>
//   //   this.setState({
//   //     className: [
//   //       { name: 'selvakumar c', age: 40 },
//   //       { name: 'raja dhaya', age: 80 },
//   //       { name: 'shiva j', age: 60 }
//   //     ]
//   //   });

//   // nameChangeHandler = (eventName: any, id: any) => {
//   //   const personIndex = this.state.className.findIndex(p => {
//   //     return p.id === id;
//   //   });

//   //   const person = {
//   //     ...this.state.className[personIndex]
//   //   };
//   //   person.name = eventName.target.value;

//   //   const className = [...this.state.className];

//   //   className[personIndex] = person;
//   //   this.setState((prevState, props) => {
//   //     return { className: className, changeCounter: this.state.changeCounter + 1 };
//   //   });
//   // };
//   // this.setState({
//   //   className:[
//   //   { name:"selvakumar c", age: 40},
//   //   { name:"raja dhaya", age: 80},
//   //   { name:"shiva j", age: 60}
//   //   ]
//   // })

//   // toggleEventHandler = () => {
//   //   const doesShow = this.state.showPerson;
//   //   this.setState({ showPerson: !doesShow });
//   // };

//   // deleteEventHandler = (personDelIndex: any) => {
//   //   const personDel = this.state.className;
//   //   personDel.splice(personDelIndex, 1);
//   //   this.setState({ personDel: personDel });
//   // };

//   // loginHandler = () => {
//   //   this.setState({
//   //     authenticate: true
//   //   });
//   // };

//   render() {
//     // console.log('[App.tsx] render');

//     // const appStyle = {
//     //   backgroundColor: 'pink'
//     // };

//     // let personName = null;
//     // if (this.state.showPerson) {
//     //   personName = (
//     //     <div>
//     //       <Persons className={this.state.className} isAuthenticate = {this.state.authenticate}
//     //       clicked={this.deleteEventHandler} changed={this.nameChangeHandler} />
//     //     </div>
//     //   );
//     // }
//     return (
//       // <WithClass classes={App}>
//       //   <Router>
//       //     <div>
//       //       <nav>
//       //         <ul>
//       //           <li>
//       //             <Link to="/">Home</Link>
//       //           </li>
//       //           <li>
//       //             <Link to="/contact">contact</Link>
//       //           </li>
//       //           <li>
//       //             <Link to="/user">User</Link>
//       //           </li>
//       //         </ul>
//       //       </nav>

//       //       {/* A <Switch> looks through its children <Route>s and
//       //       renders the first one that matches the current URL. */}
//       //       <Switch>
//       //         <Route path="/contact">
//       //           <Contact />
//       //         </Route>
//       //         <Route path="/user">
//       //           <User />
//       //         </Route>
//       //         <Route exact path="/">
//       //           <Home />
//       //         </Route>
//       //       </Switch>
//       //     </div>
//       //   </Router>

//       //   <button
//       //     onClick={() => {
//       //       this.setState({ showCockpit: false });
//       //     }}
//       //   >
//       //     Remove cockpit
//       //   </button>

//       //   <AuthContext.Provider value = {{authenticate: this.state.authenticate, login:this.loginHandler}}>
//       //   {this.state.showCockpit ? <Cockpit login={this.loginHandler} clicked={this.toggleEventHandler} /> : null}
//       //   {personName}
//       //   </AuthContext.Provider>
//       //   {/* Tab-functionality, its working
//       //   <div>
//       //     <h1>Tabs Demo</h1>
//       //     <main>
//       //       <Tabs>
//       //         <a href="https://www.youtube.com/results?search_query=how+to+make+tabs+in+react+js" target="_blank">
//       //           One
//       //         </a>
//       //         <span>Well here's a nested Tabs element.</span>
//       //         Two
//       //         <span>Two thing</span>
//       //         Three
//       //         <span>Three thing</span>
//       //       </Tabs>
//       //     </main>
//       //   </div>*/}
//       // </WithClass>

//       // <BrowserRouter basename="/my-app"> //it will help for example.com/my-app/post
//       //<BrowserRouter>
//       <div className="App">
//         <Header />
//       {/* <Blog /> */}
//       {/* <Counter/> */}
//        <Todo />
//        <Auth />
//       </div>
//      // </BrowserRouter>
//     );
//   }
// }

const App = (props: any) => {
  const [page, setPage]:any = useState('Auth');
  const [authStatus, setAuthStatus]:any = useState(false);

  const loginPage = () => {
    setAuthStatus(true);
  };
  const switchPage = (pageName:any) => {
    setPage(pageName);
  }
  return (
    <div className="App">
      <Auth_Context.Provider value={{status: authStatus, login: loginPage}}>
      <Header onLoadTodos={()=>{switchPage('Todos')}} onLoadAuth={()=>{switchPage('Auth')}}/>
      {page === 'Auth'? <Auth /> : <Todo />}
      </Auth_Context.Provider>
      
    </div>
  );
};

export default App;
