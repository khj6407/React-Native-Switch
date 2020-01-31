import React, { Component } from "react";
import { StyleSheet, DatePickerIOS, Text, View, Switch } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";

export default class App extends Component {
  state = { switchValue: false };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <Text>{this.state.switchValue ? "Dark Mode" : "White Mode"}</Text>
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  switch: { justifyContent: "center", alignItems: "center" }
});
