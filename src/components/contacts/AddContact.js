import React, { Component } from "react";

export default class AddContact extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <input
              className="form-control form-control-lg mt-2"
              label="Name"
              name="name"
              placeholder="Enter Name"
            />
            <input
              className="form-control form-control-lg mt-2"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
            />
            <input
              className="form-control form-control-lg mt-2 mb-3"
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
