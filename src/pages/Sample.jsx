import React from 'react'
import Greeting from '../components/sample/Greeting'
import { FaRegFaceAngry } from 'react-icons/fa6';

//Props 부모가 자식에게 데이터를 넘겨준다.
//프로젝트의 안정성을 위해 양방향 쓰지않고 단반향으로만 사용한다.
// 부모만 데이터를 넘겨줄수 있다.
const Sample = () => {

//로직
const handleButtonclick= (data) => {
    console.log("click!!!!!   " ,data );
}


//뷰
  return (
    <div>Sample
        <Greeting name = "하경아" onButtonClick = {handleButtonclick} />         
        <Greeting name = "최선영" onButtonClick = {handleButtonclick} />        
        <Greeting onButtonClick = {handleButtonclick} />                        
    </div>
  ) 
}
   
export default Sample   

