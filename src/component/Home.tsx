import React, { useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState<IEmployee[]>(dummyEmployeeList);

    const [shownpage, setShownpage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

    const onAddEmployeeClickHnd = () => {
   
        setShownpage(PageEnum.add);
    };

    const showListPage = () => {
        setShownpage(PageEnum.list);
    };

    const addEmployeeH = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    };

    const deleteEmployee = (data: IEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];

        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList);
    };

    const EditEmployeeData = (data: IEmployee) => {
        setShownpage(PageEnum.edit);
        setDataToEdit(data);
    };

    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.find(x => x.id === data.id);
        if (filteredData) {
            const tempData = [...employeeList];
            const indexOfRecord = tempData.indexOf(filteredData);
            tempData[indexOfRecord] = data;
            setEmployeeList(tempData);
            showListPage();
        }
    };

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Teste Microsistec</h1>
                </header>
            </article>

            <section className="section-content">
                {shownpage === PageEnum.list && (
                    <>
                        <input type="button" value="Adicionar Usuário" onClick={onAddEmployeeClickHnd} className="add-employee-btn" />
                        <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee} oneEdit={EditEmployeeData} />
                    </>
                )}

                {shownpage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickhnnd={addEmployeeH} />}

                {shownpage === PageEnum.edit && <EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onSubmitBtnClickHnd={updateData} />}
            </section>
        </>
    );
}

export default Home;
