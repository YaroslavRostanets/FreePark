import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import MapPage from './components/mapPage/mapPage';
import Menu from './components/Menu/Menu';



class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.app}>
                <Menu style={styles.menu} />
                <MapPage style={styles.mapPage} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    app: {
        display: "flex",
        flexWrap: "nowrap"
    },
    mapPage: {
        overflow: "hidden",
        flex: 0
    },
    menu: {
        marginLeft: 0,
        width: 200,
        flex: 0,
        backgroundColor: "red"
    }

});



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);