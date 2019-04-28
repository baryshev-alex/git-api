import React, { Component } from 'react';
import FormSearch from './components/formSearch';
import UserInfo from './components/userInfo';


const baseUrl = 'https://api.github.com/users';



class App extends Component {

  state = {
    avatar_url: undefined,
    public_repos: undefined,
    name: undefined,
    bio: undefined,
    following: undefined,
    followers: undefined,
    location: undefined,
    html_url: undefined,
    error: undefined
  }

  searchUser = async (e) => {
    e.preventDefault();
    const userItem = e.target.elements.ghusername.value;
    if(userItem){
      const api_url = await 
      fetch(`${baseUrl}/${userItem}`);
      const user = await api_url.json();
      console.log(user);

      this.setState({
        avatar_url: user.avatar_url,
        public_repos: user.public_repos,
        name: user.name,
        bio: user.bio,
        following: user.following,
        followers: user.followers,
        location: user.location,
        html_url: user.html_url,
        error: undefined
      });
    } else {
      this.setState({
        avatar_url: undefined,
        public_repos: undefined,
        name: undefined,
        followers: undefined,
        following: undefined,
        location: undefined,
        bio: undefined,
        html_url: undefined,
        error: "fill in the field"
      })
    }
  }

  render() {
    return (
      <div className="wrapper mt-5 mb-5">
        <div className="container block-popup">
          <FormSearch search={this.searchUser}/>
          <UserInfo 
            avatar_url={this.state.avatar_url}
            public_repos={this.state.public_repos}
            name={this.state.name}
            bio={this.state.bio}
            following={this.state.following}
            followers={this.state.followers}
            location={this.state.location}
            html_url={this.state.html_url}
            error={this.state.error}/>
        </div>
      </div>
    );
  }
}

export default App;
