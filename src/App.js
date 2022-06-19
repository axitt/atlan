import React, { useState, useEffect } from "react";
import PageLayout from "./container/layout";
import { Skeleton } from 'antd';
import './App.css';
import { Content } from "antd/lib/layout/layout";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>{loading === false ? (
      <PageLayout/>):(
        <Content style={{ margin: '24px 16px 0' }}>
          <Skeleton active />
        </Content>
      )}
    </>
  );
}

export default App;
