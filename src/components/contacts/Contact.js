import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this.onExpClick = this.onExpClick.bind(this);
    this.onCrossClick = this.onCrossClick.bind(this);
  }

  render() {
    const { isOpen } = this.state;
    const { id, name, email, phone } = this.props.profile;

    let classForExp = isOpen ? "fas fa-minus" : "fas fa-plus";
    return (
      <div className="card mb-4">
        <div className="card-header" style={{ textTransform: "uppercase" }}>
          {name} &nbsp;
          <i
            className={classForExp}
            onClick={this.onExpClick}
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ float: "right", cursor: "pointer" }}
            onClick={this.onCrossClick.bind(this, id)}
          />
          <i
            className="fas fa-edit"
            style={{ float: "right", marginRight: "10px", cursor: "pointer" }}
          />
        </div>
        {isOpen ? (
          <div className="card-body">
            <ul style={{ listStyle: "none" }}>
              <li>Email : {email}</li>
              <li>Phone : {phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }

  onExpClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onCrossClick(id) {
    this.props.deleteContact(id);
  }
}

export default connect(
  null,
  { deleteContact }
)(Contact);
