import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


export default class App extends Component {
  render(){
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )};
}
