import React, { useState } from 'react';
import './EmployeeList.style.css';
import { IEmployee } from './Employee.type';
import EmployeeModal from './Employee.Modal';

type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    oneEdit:(data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
    const { list, onDeleteClickHnd, oneEdit } = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
        <div>
            <article>
                <h3 className="list-header">Lista de Cadastro</h3>
            </article>
          
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Parentes</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((employee, index) => {
                        console.log(employee);
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.telephone}</td>
                                <td>{employee.email}</td>
                                <td>{employee.relatives}</td>
                                <td>
                                    <div>
                                        <input type="button" value="Visualizar" onClick={() => viewEmployee(employee)}/>
                                        <input type="button" value="Editar" onClick={() => oneEdit(employee) }/>
                                        <input type="button" value="Excluir" onClick={() => onDeleteClickHnd(employee)} />
                                    </div>
                                </td> 
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {showModal && dataToShow !== null && <EmployeeModal onClose={onCloseModal} data={dataToShow} />}
        </div>
    );
};

export default EmployeeList;
