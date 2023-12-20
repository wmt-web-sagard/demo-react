import logo from './logo.svg';
import './App.css';
import { Button, Flex, Tooltip ,FloatButton } from 'antd';
import { SearchOutlined,CommentOutlined,CustomerServiceOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Layout from './Component/Layout';

function App() {
  const [loadings,setLoadings]=useState([]);
  const handelLoadingClick = (index)=>{ 
    setLoadings((prev)=>{
      const newLoadings = [...prev];
      newLoadings[index]=true;
      return newLoadings
    });

    setTimeout(()=>{
      setLoadings((prev)=>{
        const newLoadings = [...prev];
        newLoadings[index]=false;
        return newLoadings
      });
    },5000)

  }
  return (
    <div style={{height:'200vh'}}>
    <Button type='primary'>Hello</Button>  
    <Button type='primary' ghost>Hello</Button>  
    <Tooltip title='search button'>
      <Button type='primary' shape='circle' icon={<SearchOutlined/>} />
    </Tooltip> 
    <Tooltip title='google search' >
      <Button type='dashed' shape='circle' icon={<SearchOutlined/>} href='https://www.google.com' target='_blank'/>
    </Tooltip>
    <Button type='primary'  loading >Loading</Button>

    <Button type='primary'  loading={loadings[0]} onClick={()=>handelLoadingClick(0)}>Loading</Button>
    <Button type='primary'  loading={loadings[1]} onClick={()=>handelLoadingClick(1)}>Loading</Button>

    {/* <FloatButton tooltip={<div>Documents</div>} /> */}
    <br/>
    <br/>
    <FloatButton.Group trigger='hover' type='primary' style={{right:24}} icon={<CommentOutlined/>} >
      <FloatButton/>
      <FloatButton type='primary' icon={<CustomerServiceOutlined/>} />
    </FloatButton.Group>

    
     
    <Layout/>
    <FloatButton.BackTop />  
    </div>
  );
}

export default App;
