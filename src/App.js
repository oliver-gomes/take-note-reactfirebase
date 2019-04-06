import React, { Component } from "react";

import Header from "./components/Header";
import NotesForm from "./components/NotesForm";
import Notes from "./components/Notes";

class App extends Component {
  state = {
    notes: []
  };

  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <NotesForm />
          <Notes notes={this.state.notes} />
        </main>
      </div>
    );
  }
}

export default App;
