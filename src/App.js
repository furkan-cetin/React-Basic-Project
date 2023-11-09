import axios from "axios";
import React, { Component } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      yükleniyor: true,
    };
  }

  componentDidMount() {
    axios.get(baseURL).then((response) => {
      this.setState({
        users: response.data,
        yükleniyor: false,
      });
    });
  }
  render() {
    const { yükleniyor, users } = this.state;

    if (yükleniyor) {
      return <div>Yükleniyor...</div>;
    }
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li>
              <p>
                {user.username} : {user.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
