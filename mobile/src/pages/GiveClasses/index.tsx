import React, { useState } from 'react';
import { View, Text, Picker, Platform, Image } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.png';

import api from '../../services/api';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){

  const { navigate } = useNavigation();

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const defaultSubjects = [ 
    "Artes", "Biologia", "Educação Física", "Espanhol", "Filosofia",
    "Física", "Geografia", "História", "Inglês", "Literatura",
    "Matemática", "Português", "Química", "Sociologia"
  ];

  const defaultWeekDays = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", 
    "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  const [ scheduleItems, setScheduleItems] = useState([
    { week_day: '0', from: '', to: ''},
  ]);

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: '0', from: '', to: ''},
    ])
  }

  const [ name, setName ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ bio, setBio ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ from, setFrom ] = useState('--:--');
  const [ to, setTo ] = useState('--:--');

  function formatTime(time: Number){
    let formatedTime = String(time);
    if (time < 10){
      formatedTime = '0' + time;
    }
    return formatedTime;
  }
  
  const handleFromChange = (event: Object, selectedDate: Date | undefined) => {
    setShowFrom(Platform.OS === 'ios');
    if (selectedDate){
      const formatedHours = formatTime(selectedDate.getHours());
      const formatedMinutes = formatTime(selectedDate.getMinutes());
      const formatedTime = formatedHours + ':' + formatedMinutes;
      setFrom(formatedTime);
    }
  }

  const handleToChange = (event: Object, selectedDate: Date | undefined) => {
    setShowTo(Platform.OS === 'ios');
    if (selectedDate){
      const formatedHours = formatTime(selectedDate.getHours());
      const formatedMinutes = formatTime(selectedDate.getMinutes());
      const formatedTime = formatedHours + ':' + formatedMinutes;
      setTo(formatedTime);
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
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição."
        />

        <View style={styles.content}>

          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>Seus dados</Text>
          </View>
          <Input 
            name="nome"
            label="Nome completo"
            value={name}
            onChangeText={(nameValue: string) => setName(nameValue)}
          />
          <Input 
            name="avatar" 
            label="Avatar"
            value={avatar}
            onChangeText={(avatarValue: string) => setAvatar(avatarValue)}
          />
          <Input 
            name="whatsapp" 
            label="WhatsApp"
            value={whatsapp}
            onChangeText={(whatsappValue: string) => setWhatsapp(whatsappValue)}
          />
          <Input 
            name="bio" 
            label="Biografia"
            value={bio}
            onChangeText={(bioValue: string) => setBio(bioValue)}
          />

          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>Sobre a aula</Text>
          </View>
          <Text style={styles.label}>Matéria</Text>
          <View style={{borderRadius: 8, overflow: 'hidden'}}>
            <Picker
              style={{ 
                backgroundColor: '#F8F8FC', 
                width: '100%', 
                color: '#6A6180',
                marginVertical: 5,
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
          <Input 
            name="price" 
            label="Custo da sua hora por aula"
            value={price}
            onChangeText={(priceValue: string) => setPrice(priceValue)}
          />

          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>Horários Disponíveis</Text>
          </View>

          {scheduleItems.map((scheduleItem, index) => {
            return(
              <View key={index}>
                <Text style={styles.label}>Dia da semana</Text>
                <View style={{borderRadius: 14, overflow: 'hidden'}}>
                  <Picker
                    style={{ 
                      backgroundColor: '#F8F8FC', 
                      width: '100%', 
                      color: '#6A6180',
                      marginVertical: 5,
                    }}
                    selectedValue={week_day}
                    onValueChange={(itemValue) => setWeekDay(itemValue)}
                  >
                    {defaultWeekDays.map((subjectItem, index) => {
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
                      <Text style={styles.label}>Das</Text>
                      <RectButton
                        style={styles.input}
                        onPress={() => setShowFrom(true)}
                      >
                        <Text style={{ 
                          color: '#6A6180', 
                          fontSize: 15
                        }}>
                          {from}
                        </Text>
                      </RectButton>

                      {showFrom && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date()}
                          mode="time"
                          display="clock"
                          onChange={handleFromChange}
                        />
                      )}
                  </View>

                  <View style={styles.inputBlock}>
                      <Text style={styles.label}>Até</Text>
                      <RectButton
                        style={styles.input}
                        onPress={() => setShowTo(true)}
                      >
                        <Text style={{ 
                          color: '#6A6180', 
                          fontSize: 15
                        }}>
                          {to}
                        </Text>
                      </RectButton>

                      {showTo && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date()}
                          mode="time"
                          onChange={handleToChange}
                        />
                      )}
                  </View>
                </View>

                <View style={styles.rmSchedule}>
                  <View style={styles.rmScheduleLine}></View>
                  <Text style={styles.rmScheduleText}>Excluir horário</Text>
                  <View style={styles.rmScheduleLine}></View>
                </View>

              </View>
            );
          })}

          <View style={styles.btnBlock}>
            <RectButton 
              style={styles.btnAdd}
              onPress={addNewScheduleItem}
            >
              <Text style={styles.btnAddContent}>+</Text>
            </RectButton>
          </View>

        </View>

        <View style={styles.footer}>
          <View style={styles.footerLeftSide}>
            <Image style={styles.warningIcon}
              source={warningIcon} 
              resizeMode="contain"
            />

            <View>  
              <Text style={styles.footerText}>Importante!</Text>
              <Text style={styles.footerText}>Preencha todos os dados</Text>
            </View>
          </View>

          <RectButton 
            style={styles.submit}
            onPress={() => navigate('RegisterSuccess')}
          >
            <Text style={styles.submitText}>Salvar cadastro</Text>
          </RectButton>
        </View>

      </ScrollView>
    </View> 
  );
}

export default GiveClasses;