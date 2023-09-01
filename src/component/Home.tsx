import React, { useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState<IEmployee[]>(dummyEmployeeList);

    const [shownpage, setShownpage] = useState(PageEnum.list);
    
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

    return (
        <>
            <article className="article-header">
                <header>
                    <h1> Teste Microsistec</h1>
                </header>
            </article>

            <section className="section-content">
                {shownpage === PageEnum.list &&(
                    <>
                        <input type="button" value="Adicionar Usuario" 
                        onClick={onAddEmployeeClickHnd} className="add-employeed-btn" />
                       
                        <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee} />
                    </>
                )}

                {shownpage=== PageEnum.add && <AddEmployee 
                onBackBtnClickHnd={showListPage} onSubmitClickhnnd={addEmployeeH} />}
            </section>
        </>
    );
}

export default Home;
