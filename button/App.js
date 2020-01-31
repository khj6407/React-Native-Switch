import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Switch } from "react-native";
import TimePicker from "react-native-24h-timepicker";

class Example extends Component {
  state = { switchValue: false };
  toggleSwitch = value => {
    this.setState({ switchValue: value });
  };
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
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
        <Text style={styles.text}>REACT NATIVE</Text>
        <Text style={styles.text}>24 HOURS FORMAT TIMEPICKER</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>TIMEPICKER</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default Example;
