import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

export default class App extends React.Component {
  state = { switchValue: false };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.switchValue ? "Dark Mode" : "White Mode"}</Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
