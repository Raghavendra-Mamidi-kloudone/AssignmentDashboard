import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Link } from "react-router-dom";
import { Skeleton } from 'antd';
import Chart from './Pages/Chart'
import { Layout, Menu, Breadcrumb } from 'antd';
import Tom from './Pages/Tom';
import Billi from './Pages/Billi';
import ChartTwo from './Pages/ChartTwo';
import Bar from './Pages/Bar';
import Pie from './Pages/Pie';
import Liquid from './Pages/Liquid';
import { Switch } from 'antd';
import React, {useState} from "react";
import { Avatar, Image } from 'antd';
import DarkModeToggle from "react-dark-mode-toggle";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from "./themes.js";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed]= useState();
  const [theme, setTheme] = useState("light");
  const themeToggler = () =>{
theme=== "light" ? setTheme("dark"): setTheme("light");

  };
  //const [isDarkMode, setIsDarkMode] = useState(() => false);

  function Switchclicked(){
    debugger;
    if(document.getElementById('dashboardrows').className=="blacktheme"){
      document.getElementById('dashboardrows').className="whitetheme";
      document.getElementById('headerrow').className="whitetheme";
    }else{
      document.getElementById('dashboardrows').className="blacktheme";
      document.getElementById('headerrow').className="blacktheme";
    }
  }
  return (


    //<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
     // <div class="relative py-3 sm:max-w-xl sm:mx-auto">
     <div>

       {/* <BrowserRouter>
       <Route path="/Tom" component={Tom}></Route>
       
       
       
       </BrowserRouter> */}

    <Layout style={{ minHeight: '100vh' }} class="bg-black-600">
      
        <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
         
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Locations
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Items
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Stock
            </Menu.Item>

            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header id="headerrow" className="blacktheme">
            <h4 class="text-white mt-3">Aikleesh
            Online Shopping Store<span><Avatar  className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span> </h4>

            
          </Header>
         

         
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item class="text-lg ">Dashboard</Breadcrumb.Item>
              {/* <ThemeProvider theme={theme==="light"? "lightTheme" : "darkTheme"}>
              {/* <Switch className="switch" checkedChildren="Light" onClick={()=>themeToggler()} unCheckedChildren="Dark" defaultChecked /> */}
            
               <Switch className="switch" checkedChildren="Dark" onClick={Switchclicked} unCheckedChildren="Light" defaultChecked /> 
              {/* <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    /> */}

              
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div class="blacktheme" id="dashboardrows">
            <div class="row " >
              {/* <div class="col-md-6 col-sm-4">
              <Bar/>
              </div> */}
             <div class="col-md-6 col-sm-6 border rounded shadow">
                 <Chart/>
              </div> 
              <div class="col-md-6 col-sm-6 border rounded shadow">
                 <Liquid/>
              </div>
              <br/>
              <div class="col-md-6 col-sm-6 border rounded shadow mt-5">
              <ChartTwo/>
              </div>
              <div class="col-md-6 col-sm-6 border rounded shadow mt-5">
                 <Pie/>
              </div>
              </div>
            </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer Details</Footer>
        </Layout>
      </Layout>
       </div>
      //</div>
  );  
}

export default App;
