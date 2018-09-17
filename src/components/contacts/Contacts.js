import React, { Component } from "react";
<<<<<<< HEAD
import Contact from "./Contact";
import { connect } from "react-redux";
import { getProfile } from "../../actions/contactActions";

class Contacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profiles } = this.props;

    console.log("profiles :", profiles);

    const profilesView = profiles.map(p => <Contact profile={p} key={p.id} />);

    return (
      <div>
        <h6>{profilesView}</h6>
=======
import Contact from './Contact'
import { connect } from 'react-redux'
import { getProfile } from '../../actions/contactActions'

class Contacts extends Component {

  constructor(props){
    super(props)

  }

  render() {
    const { profiles } = this.props

    console.log('profiles :', profiles);

    const profilesView = profiles.map(p=>(
          <Contact profile={p} key={p.id}/>
    ))


    return (
      <div>
        <h1 className="display-4">This is a Contacts Component</h1>
        {profilesView}
>>>>>>> 40953f78b0b3da832cd1ab92970738947be5a65e
      </div>
    );
    
  }


  componentDidMount(){
    this.props.getProfile()
  }

  componentDidMount() {
    this.props.getProfile();
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  const data = {
    profiles: state.profile.profiles
  };
  return data;
};

export default connect(
  mapStateToProps,
  { getProfile }
)(Contacts);
=======


const mapStateToProps = (state) => {
  const data = {
    profiles : state.profile.profiles
  }
  return data
}


export default connect(mapStateToProps,{ getProfile })(Contacts);
>>>>>>> 40953f78b0b3da832cd1ab92970738947be5a65e
