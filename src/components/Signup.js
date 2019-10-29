import React, {Component} from 'react';

export default class Signup extends Component {
  render() {
    return (
      <form>
        <input type="text" name="fullname" placeholder="full name" />
        <br />
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Signup" />
      </form>
    );
  }
}
