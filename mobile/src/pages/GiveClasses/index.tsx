import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Platform } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function GiveClasses(){

  const [show, setShow] = useState(false);

  const defaultSubjects = [ 
    "Artes", "Biologia", "Educação Física", "Espanhol", "Filosofia",
    "Física", "Geografia", "História", "Inglês", "Literatura",
    "Matemática", "Português", "Química", "Sociologia"
  ];

  const defaultWeekDays = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", 
    "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  const [ isFilterVisible, setIsFilterVisible ] = useState(false);
  const [ favorites, setFavorites ] = useState<number[]>([]);
  const [ teachers, setTeachers ] = useState([]);

  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('Qual o horário?');

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
    setTeachers(response.data);
  }

  function formatTime(time: Number){
    let formatedTime = String(time);
    if (time < 10){
      formatedTime = '0' + time;
    }
    return formatedTime;
  }

  const handleTimeChange = (event: Object, selectedDate: Date | undefined) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate){
      const formatedHours = formatTime(selectedDate.getHours());
      const formatedMinutes = formatTime(selectedDate.getMinutes());
      const formatedTime = formatedHours + ':' + formatedMinutes;
      setTime(formatedTime);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.content}>
          
        </View>

      </ScrollView>
    </View> 
  );
}

export default GiveClasses;