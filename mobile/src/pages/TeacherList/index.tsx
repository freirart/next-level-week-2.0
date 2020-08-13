import React, { useState } from 'react';
import { View, Text, Picker, Platform } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList(){

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
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
      >
      <PageHeader 
      title="Proffys disponíveis"
      headerRight={(
        <BorderlessButton
          onPress={toggleFilterVisibility}
          style={{
            height: 50, 
            width: 50, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <Feather name="filter" size={20} color="#F1A34F"/>
        </BorderlessButton>
      )}
      >
        { isFilterVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <View style={{borderRadius: 8, overflow: 'hidden', marginTop: 5}}>
            <Picker
              style={{ 
                backgroundColor: 'white', 
                width: '100%', 
                color: '#C1BCCC',
              }}
              selectedValue={subject}
              onValueChange={(itemValue) => setSubject(itemValue)}
            >
              <Picker.Item value="" label="Qual a matéria?" />
              {defaultSubjects.map((subjectItem, index) => {
                return (
                  <Picker.Item 
                    key={index} 
                    value={subjectItem} 
                    label={subjectItem} 
                  />
                );
              })}
            </Picker>
          </View> 

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <View style={{borderRadius: 8, overflow: 'hidden', marginTop: 5}}>
                <Picker
                  prompt="Qual o dia?"
                  style={{ 
                    backgroundColor: 'white', 
                    width: '100%', 
                    color: '#C1BCCC',
                    height: 52,
                  }}
                  selectedValue={week_day}
                  onValueChange={dayItem => setWeekDay(dayItem)}
                >
                  <Picker.Item value="" label="Qual o dia?"/>
                  {defaultWeekDays.map((weekDay, index) => {
                    return (
                      <Picker.Item 
                        key={weekDay} 
                        value={String(index)} 
                        label={weekDay} 
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <RectButton
                style={styles.input}
                onPress={() => setShow(true)}
              >
                <Text style={{ 
                  color: '#C1BCCC', 
                  fontSize: 15
                }}>
                  {time}
                </Text>
              </RectButton>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode="time"
                  display="clock"
                  onChange={handleTimeChange}
                />
              )}
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

        {!teachers[0] && (
          <View style={styles.default}>
            <Text style={styles.defaultText}>
              Nenhum proffy encontrado com a sua pesquisa.
            </Text>
            
            <Text style={styles.defaultText}>
              Pressione <Feather name="filter" size={20} color="#F1A34F"/> para filtrar.
            </Text>
          </View>
        )}
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