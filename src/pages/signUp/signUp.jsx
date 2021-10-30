import React, { Component } from 'react'
import {Form,Input,Button,Card} from 'antd'
import 'antd/dist/antd.css'
import styles from './signUp.less'
export default class signUp extends Component {
    render() {
        return (
            <div>
                <Card className={styles.Card}>
                    <Form
                        layout='vertical'
                        name="basic"
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                            ]}
                        >
                            <Input ref={c=>this.NameRef=c}/>
                        </Form.Item>
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
                            label="Confirm Password"
                            name="confirm password"
                            dependencies={['password']}
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                              }),
                            ]}
                            
                        >
                                <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                                message: '邮箱格式不正确',
                            }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input ref={c=>this.EmailRef=c}/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            offset: 11,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <div>hello</div>
            </div>
        )
    }
}
