import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from "expo";

const DEFAULT_COORD = {
  lat: 48.859268,
  lng: 2.347060
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{flex : 1}}
          region={{ latitude: DEFAULT_COORD.lat, longitude: DEFAULT_COORD.lng, latitudeDelta:0.2000, longitudeDelta: 0.1000}}
          scrollEnabled={false}
          liteMode={true}
        >

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
