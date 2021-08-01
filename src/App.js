import React from 'react'
import "./styles.css";
import Editor from './Components/Editor/Editor'
import Header from './Components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Editor />
    </div>
  );
}
