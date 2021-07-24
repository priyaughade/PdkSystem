import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      items: [{ id: 1, activityname: "Read Books", edit: false }],
      activityname: "",
      addData: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddName = this.handleAddName.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
  }

  // add activity name
  handleAddName = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, activityname: e.target.value });
  };
// Save the Adddata
  handleSave() {
    let newData = {
      id: this.state.items.length + 1,
      activityname: this.state.activityname,
    };
    this.setState({
      ...this.state,
      items: [...this.state.items, newData],
      addData: false,
      activityname: "",
    });
    // Store Acivity in local storage
    localStorage.setItem('Activityname', this.state.activityname)
  }
  handleAdd() {
    this.setState({ addData: true });
  }
  //Delete acivity
  handleDelete(item) {
    let list = [...this.state.items];
    let index = list.indexOf(item);
    list.splice(index, 1);
    this.setState({ ...this.state, items: list });
    console.log("button clicked", index);
  }
  //Edit Activity
  handleEdit(item) {
    const list = [...this.state.items];
    let index = list.indexOf(item);
    list[index].edit = true;
    this.setState({
      ...this.state,
      items: list,
      activityname: item.activityname,
    });
  }
  //Save Edit changes
  handleEditSave(item) {
    let list = [...this.state.items];
    let index = list.indexOf(item);
    list[index].edit = false;
    list[index].activityname = this.state.activityname;
    this.setState({
      ...this.state,
      items: list,
      activityname: "",
      appData: false,
    });
  }
  handleEditName = (e) => {
    this.setState({ ...this.state, activityname: e.target.value });
  };

  render() {
    const { items, activityname, addData } = this.state;
    console.log(localStorage)
    // window.localStorage.clear();

    return (
      <div className="box">
        <h4>ToDo App</h4>
        <br />
        <Button
          type="button"
          variant="primary"
          onClick={() => this.handleAdd()}
        >
          Add
        </Button>
        <br />
        <br />
        {addData ? (
          <div>
            <input
              type="text"
              value={activityname}
              onChange={this.handleAddName}
              placeholder={"Enter Acivity Name"}
            />{" "}
            &emsp;
            <Button
              type="button"
              variant="primary"
              onClick={() => this.handleSave()}
            >
              Save
            </Button>
            <br />
          </div>
        ) : (
          ""
        )}
        <br />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <b>Acivity</b> :{" "}
              {item.edit ? (
                <input
                  type="text"
                  value={activityname}
                  placeholder="Enter name"
                  onChange={this.handleEditName}
                />
              ) : (
                <b>{item.activityname}</b>
              )}
              , &emsp;&emsp;&emsp;
              <Button
                type="button"
                variant="warning"
                onClick={() => this.handleEdit(item)}
              >
                {" "}
                Edit{" "}
              </Button>
              &emsp;
              <Button
                type="button"
                variant="success"
                onClick={() => this.handleEditSave(item)}
              >
                {" "}
                Save{" "}
              </Button>
              &emsp;
              <Button
                type="button"
                variant="danger"
                onClick={() => this.handleDelete(item)}
              >
                {" "}
                Delete{" "}
              </Button>{" "}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Table;
