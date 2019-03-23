import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { LinearGradient  } from 'expo';

const { height, width } = Dimensions.get('window')

class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                    source={this.props.imageUri}
                    style={{ flex: 1, width: null, height: null, resizeMode: 'cover', justifyContent: 'flex-end' }}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                        style={{
                            justifyContent: 'flex-end',
                            position: 'relative',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: (240 * 0.40),
                        }}>
                        <View style={{justifyContent: "flex-end", flexDirection: 'column', marginBottom: 10}}>
                            <Text style={{ fontWeight: '400', color: "white", marginBottom: 2, marginLeft: 10}}>{this.props.title}</Text>
                            <Text style={{ fontWeight: '200', color: 'white', marginBottom: 0, marginLeft: 10}}>{this.props.description}</Text>
                        </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>

            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0,
        elevation: 5,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        height: height - (height * 0.65),
        width: width - (width * 0.15),
        marginLeft: 20,
        marginRight: 0,
        marginEnd: 3,
        borderWidth: 0.5,
        borderColor: '#D2D2D2'
    }
});