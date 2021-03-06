import React, {Component} from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import getRouter from '../../router/router';
import 'antd/dist/antd.css';
import style from '../../common/style.less';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                 <div className="ant-layout-wrapper">
                    <div className="ant-layout-container">
                        <div style={{ height: 210 }}>
                        {getRouter()}
                        </div>
                    </div>
                 </div>
                <Footer />
            </div>
        )
    }
}