import React, { useState } from 'react';
import './EmployeeForm.style.css';
import { IEmployee } from './Employee.type';

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickhnnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [relatives, setRelatives] = useState('');

  const { onBackBtnClickHnd, onSubmitClickhnnd } = props;

  const onNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onTelephoneChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(e.target.value);
  };

  const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onRelativesChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelatives(e.target.value);
  };

  const onSubmitBtnClickHnnd = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      name: name,
      telephone: telephone,
      email: email,
      relatives: relatives,
    };
    onSubmitClickhnnd(data);
    onBackBtnClickHnd();
  };

  return (
    <div className='form-container'>
      <h3>Adicione as informações:</h3>
      <form onSubmit={onSubmitBtnClickHnnd} className='input-container'>
        <div className='input-group'>
          <label htmlFor='name'>Nome:</label>
          <input type='text' id='name' value={name} onChange={onNameChangeHnd} />
        </div>

        <div className='input-group'>
          <label htmlFor='telephone'>Telefone:</label>
          <input
            type='text'
            id='telephone'
            value={telephone}
            onChange={onTelephoneChangeHnd}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' value={email} onChange={onEmailChangeHnd} />
        </div>

        <div className='input-group'>
          <label htmlFor='relatives'>Parentes:</label>
          <input
            type='text'
            id='relatives'
            value={relatives}
            onChange={onRelativesChangeHnd}
          />
        </div>

        <div className='button-group'>
          <input type='button' value='Voltar' onClick={onBackBtnClickHnd} />
          <input type='submit' value='Adicionar' />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
