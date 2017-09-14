import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePassWordChange = this.handlePassWordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
          userName: '',
          passWord: ''
        };
    }

    render() {
        return (
            <div className="container">
                <form className="col-sm-offset-4 col-sm-4 form-horizontal" method="post" onSubmit={this.handleLogin}>
                    <fieldset>
                        <legend></legend>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <p className="tc">请先登录</p>
                            </div>
                            <div className="panel-body m15">
                                <div className="form-group">
                                    <div className="input-group">
						                <span className="input-group-addon">
						                    <span className="glyphicon glyphicon-user"/>
						                </span>
                                        <input type="text" className="form-control" id="username" name="username" placeholder="请输入用户名"
                                               onChange={this.handleUserNameChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
						                <span className="input-group-addon">
						                    <span className="glyphicon glyphicon-lock"/>
						                </span>
                                        <input type="text" className="form-control" id="password" name="password" placeholder="请输入密码"
                                               onChange={this.handlePassWordChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" id="login0">登录</button>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-info col-sm-2 col-sm-offset-10" id="register0">注册</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }

    handleUserNameChange(e) {
        this.setState({userName: e.target.value});
    }

    handlePassWordChange(e) {
        this.setState({passWord: e.target.value});
    }

    handleLogin(e) {
        e.preventDefault();
        //location.href = 'home';
    }
}

export default LoginPage;
