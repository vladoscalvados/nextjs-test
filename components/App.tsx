

export default function App() {

    let competenceArray: Array<{ id: number, value: string }> = [
        {id:1,value:"1"},
        {id:2,value:"2"},
        {id:3,value:"3"},
        {id:4,value:"3"},
        {id:5,value:"2"},
        {id:6,value:"1"}
    ]

    let informationArray:Array<{id:number,desc:string}> = [
        {id:1,desc:"Профиль требований к должности"},
        {id:2,desc:"Инженер"},
        {id:3,desc:"Логистика"},
        {id:4,desc:"Специализация"}

    ]


    return (
        <>
            <div className="wrapper">
                <div className="wrapper-left">
                    <div className="wrapper-title">Свойства</div>
                    <div>Общая информация</div>
                    <div>Документ</div>
                    <div>Должность</div>
                    <div>Направление</div>
                    <div>Специализация</div>
                    <div>Образование</div>
                    <div>Степень</div>
                    <div>Специализация</div>
                    <div>Корпоративные компетенции</div>
                    <div>Сотрудничество</div>
                    <div>Коммуникации и убеждения</div>
                    <div>Достижения результата</div>
                    <div>Системное мышление</div>
                    <div>Культура безопасности</div>
                    <div>Сотрудничество</div>
                    <div>Дополнительные требования</div>
                    <div>Инструменты</div>
                    <div>SAP ERP</div>
                    <div>SAP HR</div>
                    <div>Английский</div>
                </div>
                <div className="wrapper-right">
                    <div className="wrapper-title float">Значения</div>
                    <div>
                        <li></li>
                    </div>
                    {
                        informationArray.map(i => (
                            <div key={i.id} className="float">{i.desc}</div>
                        ))
                    }
                    <div>
                        <li></li>
                    </div>
                    <div className="float">Высшее/среднее образование</div>
                    <div className="float">инженерно-техническая</div>
                    <div>
                        <li></li>
                    </div>
                        {competenceArray.map(c => (
                            <div key={c.id} className="float">{c.value}</div>
                        ))}


                    <div>
                        <li></li>
                    </div>
                    <div className="float">
                        <li></li>
                    </div>
                    <div className="float-left">Продвинутый уровень</div>
                    <div className="float-left">Продвинутый уровень</div>
                    <div className="float">
                        <li></li>
                    </div>
                    <div className="float-left">Продвинутый уровень</div>
                </div>
            </div>
        </>
    )
}
