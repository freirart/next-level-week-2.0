import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher{
  id: number;
  avatar: string;
  bio: string;
  name: string;
  price: number;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps{ 
  teacher: Teacher;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  const teacherPriceString = String(teacher.price).indexOf('.') !== -1 
    ? teacher.price
    : teacher.price + ',00';

  return (
    <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>Preço/hora<strong>R$ {teacherPriceString }</strong></p>
            <a target="_blank" rel="noopener noreferrer" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
              <img src={whatsappIcon} alt="Whatsapp" /> Entrar em contato
            </a>
          </footer>
        </article>
  );
}

export default TeacherItem;