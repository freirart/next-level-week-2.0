import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList(){

  const [ isFilterVisible, setIsFilterVisible ] = useState(false);
  const [ favorites, setFavorites ] = useState<number[]>([]);
  const [ teachers, setTeachers ] = useState([]);

  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id);
        setFavorites(favoritedTeachersIds);
      }
    });
  }
  
  function toggleFilterVisibility(){
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFiltersSubmit(){
    loadFavorites();
    const response =  await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    toggleFilterVisibility();
    console.log(response.data);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
      title="Proffys disponíveis"
      headerRight={(
        <BorderlessButton
          onPress={toggleFilterVisibility}>
          <Feather name="filter" size={20} color="#FFF"/>
        </BorderlessButton>
      )}
      >
        { isFilterVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a matéria?"
            placeholderTextColor="#C1BCCC"
            value={subject}
            onChangeText={text => setSubject(text)}
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="#C1BCCC"
                value={week_day}
                onChangeText={text => setWeekDay(text)}
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor="#C1BCCC"
                value={time}
                onChangeText={text => setTime(text)}
              />
            </View>
          </View>
          <RectButton 
            style={styles.submitButton}
            onPress={handleFiltersSubmit}
          >
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>)}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (<TeacherItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />);
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;