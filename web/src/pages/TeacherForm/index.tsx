import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {

  const history = useHistory();

  const [ name, setName ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ whatsapp, setWhatsapp ] = useState('');
  const [ bio, setBio ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ price, setPrice ] = useState('');


  const [ scheduleItems, setScheduleItems] = useState([
    { week_day: '0', from: '', to: ''},
  ])

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: '0', from: '', to: ''},
    ])
  }

  function setScheduleValue(position: number, field: string, value: string){
    const newScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    })

    setScheduleItems(newScheduleItems);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
      name, 
      avatar, 
      whatsapp, 
      bio,
      subject, 
      price: Number(price), 
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastrado com sucesso!');
      history.push('register-success');
    }).catch(() => {
      alert('Erro ao cadastrar!');
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input 
          label="Nome completo" 
          name="name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          />

          <Input 
          label="Avatar" 
          name="avatar"
          value={avatar}
          onChange={(e) => {setAvatar(e.target.value)}}
          />
          
          <Input 
          label="WhatsApp" 
          name="whatsapp"
          value={whatsapp}
          onChange={(e) => {setWhatsapp(e.target.value)}}
          />

          <Textarea 
          label="Biografia"
          name="bio" 
          value={bio}
          onChange={(e) => {setBio(e.target.value)}}
          />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input 
          label="Custo da sua hora por aula" 
          name="price"
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
          </legend>
          {scheduleItems.map((scheduleItem, index) => {
            return(
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select 
                  label="Dia da Semana" 
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={(e) => setScheduleValue(index, 'week_day', e.target.value)}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />
                <Input 
                name="from" 
                label="Das" 
                type="time" 
                value={scheduleItem.from}
                onChange={(e) => setScheduleValue(index, 'from', e.target.value)}
                />
                <Input 
                name="to" 
                label="Até" 
                type="time" 
                value={scheduleItem.to}
                onChange={(e) => setScheduleValue(index, 'to', e.target.value)}
                />
              </div>
            )
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados 
          </p>
          <button type="submit">
            Salvar cadastro
          </button>
        </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;