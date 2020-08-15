import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

function Favorites(){

  const [ favorites, setFavorites ] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
      >
        <PageHeader title="Meus proffys Favoritos" />
        <View style={styles.content}>
          {favorites.map((teacher: Teacher) => {
            return (<TeacherItem key={teacher.id} teacher={teacher} favorited />)
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default Favorites;