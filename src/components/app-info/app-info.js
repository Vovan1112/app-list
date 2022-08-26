import "./app-info.css";

const AppInfo = ({employees, employeesUp}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {employeesUp}</h2>
        </div>
    )
}

export default AppInfo;