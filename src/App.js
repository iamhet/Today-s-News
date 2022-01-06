import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
      this.setState({progress:progress})
  }
  render() {
    console.log(this.apiKey);
    return (
      <div>
        <BrowserRouter>
        
          <NavBar />
          <LoadingBar height={3} color="#FF0000" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="in" country="in" category="general" />}
            ></Route>
            <Route
              exact
              path="/india"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="in" country="in" category="general" />}
            ></Route>
            <Route
              exact
              path="/canada"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="ca" country="ca" category="general" />}
            ></Route>
            <Route
              exact
              path="/unitedKingdom"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="gb" country="gb" category="general" />}
            ></Route>
            <Route
              exact
              path="/southAfrica"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="za" country="za" category="general" />}
            ></Route>
            <Route
              exact
              path="/australia"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="au" country="au" category="general" />}
            ></Route>
            <Route
              exact
              path="/japan"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="jp" country="jp" category="general" />}
            ></Route>
            <Route
              exact
              path="/Russia"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="ru" country="ru" category="general" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
 
