import React, { Component } from "react";
import * as firebase from "firebase";

export default class NotesForm extends Component {
  state = {
    title: "",
    note: ""
  };

  onChangeHandler = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  createNote = () => {
    if (this.state.title !== "" && this.state.note !== "") {
      firebase
        .database()
        .ref("notes")
        .push({
          title: this.state.title,
          note: this.state.note
        });
    }
  };

  render() {
    return (
      <section className="noteform">
        <h3>Create New Note</h3>
        <div className="form-group">
          <label htmlFor="noteform-title">Title</label>
          <input
            type="text"
            className="noteform-title"
            id="noteform-title"
            value={this.state.title}
            onChange={e => this.onChangeHandler(e, "title")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="noteform-note">Note</label>
          <textarea
            name="noteform-note"
            id="noteform-note"
            value={this.state.note}
            onChange={e => this.onChangeHandler(e, "note")}
          />
        </div>
        <button onClick={this.createNote}>Create Note</button>
      </section>
    );
  }
}
