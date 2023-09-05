import React, { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";

type Props = {
    data: IEmployee;
    onBackBtnClickHnd: () => void;
    onSubmitBtnClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
    const { data, onBackBtnClickHnd, onSubmitBtnClickHnd } = props;

    const [name, setName] = useState(data.name);
    const [telephone, setTelephone] = useState(data.telephone);
    const [email, setEmail] = useState(data.email);
    const [relatives, setRelatives] = useState(data.relatives);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedData: IEmployee = {
            id: data.id,
            name: name,
            telephone: telephone,
            email: email,
            relatives: relatives,
        };
        onSubmitBtnClickHnd(updatedData);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Atualize as informações:</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome: </label>
                    <input type="text" value={name} onChange={onNameChangeHnd} />
                </div>

                <div>
                    <label>Telefone: </label>
                    <input type="text" value={telephone} onChange={onTelephoneChangeHnd} />
                </div>

                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={onEmailChangeHnd} />
                </div>

                <div>
                    <label>Parentes: </label>
                    <input type="text" value={relatives} onChange={onRelativesChangeHnd} />
                </div>

                <div>
                    <input type="button" value="Voltar" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Atualizar" />
                </div>
            </form>
        </div>
    );
};

export default EditEmployee;
