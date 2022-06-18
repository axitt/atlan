import React, { useState } from 'react';
import '../App.css';
import { Layout, Button, Row, Col, Input, message, Space } from 'antd';
import Nav from '../component/header';
import Foot from '../component/footer';
import Drawer from '../component/drawer';
import TableResult from '../component/table';
import { result } from '../utils/queryResults';
const { Content} = Layout;
const { TextArea } = Input;

//sections and subsections
function PageLayout(){
    const [query, setQuery] = useState('');
    const [toggleRes, setToggleRes] = useState(false);
    /*var items = query.length>0?result.find(item => item.id==query)["query"]:'';*/

    //copy to clipboard
    const copy = async () => {
      try{
        await navigator.clipboard.writeText(query);
        message.success('Copied');
      }catch(err){
        message.error('Error Occured');
      }
    }
    //------

    return (<Layout className="layout">
    <Layout>
      <Drawer query={query} setQuery={setQuery} toggleRes={toggleRes} setToggleRes={setToggleRes}/>
      <Layout>
        <Nav/>
        
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{  minHeight: 250 }}>
              <Row>
                <Col span={24}>
                  <div className="controlNav">
                    <Row justify="end" className="featureBtn" align="middle">
                      <Col style={{marginRight:'14px'}}><i onClick={copy} className="far fa-copy "></i></Col>
                      <Col style={{marginRight:'14px'}}><i onClick={ () => {setQuery('');setToggleRes(false);message.success('Cleared');}} className="fas fa-trash-alt"></i></Col>
                      <Col style={{marginRight:'14px'}}><i className='fas fa-history'></i></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={1}>
                  <TextArea
                    id="editorFont"
                    readOnly={true}
                    style={{padding:'5px'}}
                    placeholder="1&#10;2&#10;3&#10;4&#10;5&#10;6&#10;7&#10;8"
                    autoSize={{
                      minRows: 10,
                      maxRows: 10,
                    }}
                  />
                </Col>
                <Col span={23}>
                  <TextArea
                  id="editorFont"
                  autoFocus={true}
                  style={{paddingBottom:'5px'}}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="write your query here ...."
                  autoSize={{
                    minRows: 10,
                    maxRows: 10,
                  }}
                  />{console.log(query)}
                </Col>
              </Row>
            </div>
            <div className="run-export">
              <Row type="flex" justify="end">
                <Col style={{marginRight:'16px'}}><Button onClick={ () => setToggleRes(true)} type="primary">Run Code</Button></Col>
                <Col><Button onClick={ () => {setQuery('');setToggleRes(false);message.success('Cleared');}}>Reset</Button></Col>
              </Row>
            </div>  
          </Content>

      </Layout>
    </Layout>
    <Layout>
      <Content>
      <div className="site-layout-background" style={{padding: 24, minHeight: 300 }}>

      {toggleRes?<TableResult />:<></>}

      </div>
      </Content>
    </Layout>

    <Foot/>
</Layout>
    )
}
//------

export default PageLayout;