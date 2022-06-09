import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: undefined,
      date2: undefined
    };
  }

  setDate1 = (e, data) => {
    this.setState({ date1: data });
  };

  setDate2 = (e, data) => {
    this.setState({ date2: data });
  };

  render() {
    console.log("Date1:", this.state.date1);
    console.log("Date2:", this.state.date2);

    return (
      <MuiThemeProvider>
        <div>
          <DatePicker
            autoOk
            value={this.state.date1}
            onChange={this.setDate1}
            floatingLabelText="Date1"
            container="inline"
          />
          <DatePicker
            defaultDate={this.state.date1}
            valueLink={this.state.date2}
            onChange={this.setDate2}
            autoOk
            floatingLabelText="Date2"
            container="inline"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
