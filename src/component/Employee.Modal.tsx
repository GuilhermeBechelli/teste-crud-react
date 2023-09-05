import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";
import React from 'react';





type Props = {
  onClose: () => void;
  data: IEmployee   
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="fechar" onClick={onClose}> &times;</span>
   <        h3>Dados do Cadastro</h3>
            <div>
                    <div>
                        <label> Nome: {data.name}</label>
                    </div>

                    <div>
                        <label>Telefone: {data.telephone}</label>
                    </div>
                    <div>
                        <label>   Email: {data.email}</label>
                    </div>
                    <div>
                        <label> Parentes: {data.relatives}</label>
                    </div>


            </div>

      </div>
    </div>
  );
};

export default EmployeeModal;
