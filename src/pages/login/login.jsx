import React, { Component } from 'react'
import { Card,Form,Input,Button } from 'antd'
import 'antd/dist/antd.css'
import styles from './login.less'
import InspurAvatar from '../../img/inspur_avatar.jpg'
import {Link} from 'react-router-dom'
export default class login extends Component {
    render() {
        return (
            <div>
                <Card className={styles.login_card}>
                    <div>
                        <img src={InspurAvatar} alt="" />
                    </div>
                    <Form
                        layout='vertical'
                        name="basic"
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input ref={c=>this.userNameRef=c}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password ref={c=>this.passWordRef=c} />
                        </Form.Item>
                        
                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={this.Submit}>
                                Login
                            </Button>
                        </Form.Item>
                        </Form>
                        <Link to='/signUp' >sign up</Link>
                </Card>
                <div>hello</div>
            </div>
        )
    }
    Submit=()=>{
        console.log(this.userNameRef.props.value);
        console.log(this.passWordRef.props.value);
    }
}
