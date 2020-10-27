import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const win = Dimensions.get('window');

export const ImageScreen = ({route}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.imageContainer}>
      <ActivityIndicator
        style={isLoading ? styles.loader : styles.loaderEnd}
        size="large"
        color="#999999"
      />
      <Image
        source={{uri: route.params.url}}
        resizeMode={'contain'}
        style={isLoading ? styles.imageLoading : styles.image}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={(e) => setIsLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
  loaderEnd: {
    display: 'none',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
  imageLoading: {
    display: 'none',
  },
});
