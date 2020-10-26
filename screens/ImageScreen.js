import React from 'react';
import {
  Image,
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const win = Dimensions.get('window');

export const ImageScreen = ({route}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: route.params.url}}
        resizeMode={'contain'}
        style={styles.image}
      />
      {/* <ActivityIndicator size="large" color="#757575" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
});
