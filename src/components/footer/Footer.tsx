import React from "react";
import { Layout, Typography } from "antd";
import s1 from '../../assets/images/facebook-807588_640.png'
import s2 from '../../assets/images/follow-826033_640.png'
import s3 from '../../assets/images/icon-720944_640.png'
 let arr:Array<string>=[s1,s2,s3]
 console.log(arr);
 
export const Footer : React.FC = () => {
    return (
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center",overflow:'hidden' }}>
         {arr.forEach(item=>{
          <img src={item} alt="" key={item} />
         })}
           中
        </Typography.Title>
      
      </Layout.Footer>
    );
}