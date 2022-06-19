import React, { useState } from 'react';
import '../App.css';
import { Layout, Button, Row, Col, Input, message, Tooltip, Drawer } from 'antd';
import Nav from '../component/header';
import Foot from '../component/footer';
import LeftDrawer from '../component/drawer';
import TableResult from '../component/table';
import { result } from '../utils/queryResults';
const { Content} = Layout;
const { TextArea } = Input;

//sections and subsections
function PageLayout(){
    const [query, setQuery] = useState('');//sql query
    const [toggleRes, setToggleRes] = useState(false);//for table display
    const [data, setData] = useState([]);//out for sql query
    const [history, setHistory] = useState([]);//run history
    const [visible, setVisible] = useState(false);//history drawer visible
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

    //history drawer
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    //-------

    return (<Layout className="layout">
    <Layout>
      <LeftDrawer query={query} setQuery={setQuery} toggleRes={toggleRes} setToggleRes={setToggleRes}/>
      <Layout>
        <Nav/>
        
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{  minHeight: 250 }}>
              <Row>
                <Col span={24}>
                  <div className="controlNav">
                    <Row justify="end" className="featureBtn" align="middle">
                      <Col style={{marginRight:'14px'}}><Tooltip placement="bottom" title="Copy"><i onClick={copy} className="fa fa-copy "></i></Tooltip></Col>
                      <Col style={{marginRight:'14px'}}><Tooltip placement="bottom" title="Clear"><i onClick={ () => {setQuery('');setToggleRes(false);message.success('Cleared');}} className="fa fa-trash"></i></Tooltip></Col>
                      <Col style={{marginRight:'14px'}}><Tooltip placement="bottom" title="History"><i onClick={showDrawer} className='fa fa-history'></i>
                        <Drawer title="History" placement="right" onClose={onClose} visible={visible}>
                          {history.map((e, i) => (
                            <p className='historyPara' onClick={async()=>{
                              try{
                                await navigator.clipboard.writeText(e);
                                message.success('Copied');
                              }catch(err){
                                message.error('Error Occured');
                              }
                            }} key={e + i}>{e}</p>
                          ))}
                        </Drawer></Tooltip>
                      </Col>
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
                  onChange={e => {setQuery(e.target.value);setToggleRes(false);setData([])}}
                  placeholder="write your query here ...."
                  autoSize={{
                    minRows: 10,
                    maxRows: 10,
                  }}
                  />
                </Col>
              </Row>
            </div>
            <div className="run-export">
              <Row type="flex" justify="end">
                <Col style={{marginRight:'16px'}}><Button onClick={ () => {setHistory(history => [...history,query]); setToggleRes(true);setData(query.length>0?result.find(item => item.query==query)["output"]:[]); }} type="primary">Run Code</Button></Col>
                <Col><Button onClick={ () => {setQuery('');setToggleRes(false);message.success('Cleared');}}>Reset</Button></Col>
              </Row>
            </div>  
          </Content>

      </Layout>
    </Layout>
    <Layout>
      <Content>
      <div className="site-layout-background" style={{padding: 24, minHeight: 300 }}>
      {toggleRes?<TableResult data={data}/>:<></>}
      </div>
      </Content>
    </Layout>

    <Foot/>
</Layout>
    )
}
//------

export default PageLayout;