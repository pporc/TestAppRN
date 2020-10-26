import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListItem = ({img, name, description}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Image', {url: img.small})}
      style={styles.listItem}>
      <Image source={{uri: img.thumb}} style={{width: 100, height: 100}} />
      <View style={styles.descriptionBlock}>
        <Text>Author: {name}</Text>
        {description && <Text>Description: {description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
