import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWw0aSIsImEiOiJja3FxaGF3cHIwcG42MzJuYmF6cGZhajJvIn0.iP08XNkw5vdtMx41Rt9-IQ',
);

const Main = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} styleJSON={"https://maps.megapolis-it.ru/styles?l=vector"}
        logoEnabled={false} compassEnabled={false}/>        
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Secondary')}>
        <Text>Go to Secondary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  page: {
    flex: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
