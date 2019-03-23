import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import { Avatar  } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPortrait: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/female_woman_avatar_portrait-512.png'
    };
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
          <Entypo style={{flex: 0, marginTop: 10, marginRight: 20}} name="dots-three-vertical" size={20} color="black" />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: height - (height * 0.80)}}>
          <Avatar
            rounded
            size={'xlarge'}
            marginTop={-5}
            source={{ uri: this.state.userPortrait}}/>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end', marginTop: 20}}> 
          <Text style={styles.nameText}>Jane Doe</Text>
          <Text style={styles.userMotto}>{"\"Cooking Master..." + "\n" +"Awesome Chief\""}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    textAlign: 'center', 
    fontSize: 28, 
    fontWeight: '500', 
    marginLeft: 0, 
    textDecorationLine: 'underline', 
    textDecorationColor: "#5B5B5B"
  },
  userMotto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 5,
    color: '#5B5B5B',
    flexWrap: 'wrap'
  },
});
