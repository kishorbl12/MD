import React from "react";
import {StyleSheet, Text, View} from "react-native";

class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>Login Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default LoginScreen;