import React, {Component} from 'react';
import 'bootswatch/dist/superhero/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron mt-5">
              <h1 className="display-4">War Thunder Machines Digest</h1>
              <p className="lead">All machines night/thermal vision at one place</p>
              <hr className="my-4"/>
              <p>Good fight, good night!</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
