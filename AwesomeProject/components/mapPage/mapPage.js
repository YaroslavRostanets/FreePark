/**
 * Created by Yaroslav on 30.07.2017.
 */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class MapPage extends Component {
    render(){
        return (
            <View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        width: "10%",
        height: "102%"
    }
});

export default MapPage;

