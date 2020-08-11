import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import './styles.css';

function TeacherList() {

  const [ teachers, setTeachers ] = useState([]);
  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');

  async function searchTeachers(e: FormEvent){
    e.preventDefault();
    
    const response =  await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}> 
        <Select 
            label="Matéria" 
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
            value={subject}
            onChange={(e) => {setSubject(e.target.value)}}
          />

          <Select 
            label="Dia da Semana" 
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
          />

          <Input 
            label="Horário"
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </PageHeader>

      <main>
        {!teachers[0] && (
          <div className="default-item">
            <p>Nenhum proffy encontrado com a sua pesquisa.</p>
          </div>
        )}
        {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
      </main>
    </div>
  );
}

export default TeacherList;
