import React,{useState} from "react";
import { Col, Row, Spin, Skeleton, Result, Button, Progress , Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Layout = () => {

    const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };




    
  return (
    <div>
      <Row>
        <Col xs={24} sm={12} lg={6}>
          col-6-1
        </Col>
        <Col xs={24} sm={12} lg={6}>
          col-6-2
        </Col>
        <Col xs={24} sm={12} lg={6}>
          col-6-3
        </Col>
        <Col xs={24} sm={12} lg={6}>
          col-6-3
        </Col>
      </Row>
      <br />
      <br />
      <Spin tip="Loading" size="large">
        s
      </Spin>
      <Skeleton active />
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />

      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />

      <Progress percent={50} type="circle" status="active" />
      <Progress percent={70} type="circle" status="exception" />
      <Progress percent={100} type="dashboard" />


        <br/>
        <br/>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default Layout;
