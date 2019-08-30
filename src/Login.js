import React from 'react';


export default class Login extends React.Component {
   render(){
        return <div>
            <h3>Вход в личный кабинет</h3>
            <p><strong>Логин:</strong><input maxLength = "25" size = "40" name="login" ></input></p>
            <p><strong>Пароль:</strong><input type="password" maxLength = "25" size = "40" name = "password"></input></p>
            <button>Войти</button>
        </div>
    }
}
