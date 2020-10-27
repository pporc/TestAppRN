import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListItem = ({img, name, description}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image', {url: img.small})}>
        <Image source={{uri: img.thumb}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.descriptionBlock}>
        <Text>
          <Text style={styles.key}>Author:</Text> {name}
        </Text>
        {description && (
          <Text>
            <Text style={styles.key}>Description: </Text>
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  key: {
    color: '#717171',
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  descriptionBlock: {
    padding: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
  },
});
