import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import AlertBox from './components/AlertBox'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      showModal: false,
      error: false,
      errorMsg: ''
    }
  }

  closeHandler = () => {
    this.setState({showModal: false})
  }

  noErrorDetected = () => {
    this.setState({error: false, showModal: false});
  }

  captureErrorHandler = (error) => {
    console.log(error);
    this.setState({error: true, showModal: true, errorMsg: error.message});
  }

  render(){
  return (
    <>
      <Header />

      <Main 
        captureErrorHandler={this.captureErrorHandler}
        noErrorDetected={this.noErrorDetected}
        errorMessage= {this.state.errorMsg}
        error={this.state.error}
      />
      
      <Footer />

      <AlertBox 
        show={this.state.showModal} 
        onClose={this.closeHandler} 
        errorMessage= {this.state.errorMsg}
      />
    </>
  )};
}
