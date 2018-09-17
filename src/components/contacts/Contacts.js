import React, { Component } from "react";
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
      </div>
    );
    
  }


  componentDidMount(){
    this.props.getProfile()
  }
}



const mapStateToProps = (state) => {
  const data = {
    profiles : state.profile.profiles
  }
  return data
}


export default connect(mapStateToProps,{ getProfile })(Contacts);
