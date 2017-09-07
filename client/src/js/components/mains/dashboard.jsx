import React from "react";
import { connect } from "react-redux";
import classNames from 'classnames';
// import Api from "../../utils/api";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SideMenu, MainNav } from "./../partials/";
import FlashMessageList from './../flash/FlashMessagesList';
import { logout } from './../../actions/loginActions';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (sessionStorage.getItem('user') === null) {
            this.props.history.push('/login');
            return;
          }
    }
  render() {
      const { isAuthenticated, user } = this.props.login;
    return (
        <div id="dashContainer" className="teal lighten-5">
            <div id="appContainer" className="row no-marginbtm">
                <SideMenu
                    isAuthenticated={isAuthenticated}
                    user={user} />
                <div id="appBoard" className="col s10 m9 l10 no-padding">
                    <MainNav />
                    <br/>
                    <div id="chatArea" className="white-text">
                        <FlashMessageList />
                        <div className="card-panel welcome teal-text">
                            <h2 className="center-align">Welcome {user.data.fullName}</h2>
                            <h4 className="left-align center">
                                You don&rsquo;t have to shout. <br/>
                                <span className="right-align flow-text">
                                    Just POSTiT!!!
                                </span>
                            </h4>
                            <div className="row">
                            <br/>
                            <div className="col m8 row">
                                <form>
                                    <div className="input-field search col s12">
                                    <i className="icon ion-ios-search prefix right"></i>
                                        <input type="search"
                                            id="searchArea"
                                            placeholder="search"
                                            className="teal white-text"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col m4">
                                <p>
                                    <span className="flow-text or">or </span> &nbsp;
                                    <a className="btn createGroup waves-effect"
                                        href="/create-group">
                                        Create Group
                                    </a>
                                </p>
                            </div>
                            <br/><br/><br/><br/>
                            <div className="aboutBox row">
                                <div className="col s12">
                                    <h5 className="left-align">About Us</h5>
                                    <p>
                                        Is a simple application that allows
                                        friends and colleagues create groups
                                        for notifications. This way one person
                                        can post notifications to everyone by
                                        sending a message once - a broadcast
                                        message. The application allows people
                                        create accounts, create groups and add
                                        registered users to the groups, and
                                        then send messages out to these groups
                                        whenever they want.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

Dashboard.PropTypes = {
    login: PropTypes.object.isRequired
}
 
function mapStateToProps(state){
  return {
      login: state.login
  }
}

export default connect(mapStateToProps)(withRouter(Dashboard));
