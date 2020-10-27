import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {ListItem} from '../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../store/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector((state) => state.data);

  const renderItem = ({item}) => (
    <ListItem
      id={item.id}
      img={item.urls}
      description={item.alt_description}
      name={item.user.username}
    />
  );

  return (
    <>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
