import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class LectureApp extends Component {
  constructor(props) {
   super(props);
   this.state = { text: 'Search Oils....' };
 }
  render() {
    let pic = {
      uri: 'https://static1.squarespace.com/static/5669f6d5c21b86abf16a28e8/t/574a1477ab48de41ef8a4421/1464472704334/?format=1000w'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          All about Essential Oils!
        </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
         <Image source={pic} style={{width: 200, height: 110}}/>
        <Text style={styles.instructions}>
          Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odor of the ointment. John 12:3 (KJV)
        </Text>
        <Text style={styles.instructions}>
           Embracing a more holistic and clean way of living, using Young Living Essential Oils!
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 239, 231)',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
    fontSize: 12,
  },
});

AppRegistry.registerComponent('LectureApp', () => LectureApp);
