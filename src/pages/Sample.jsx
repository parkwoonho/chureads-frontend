import React, { useEffect } from 'react'
import Greeting from '../components/sample/Greeting'
import { useState } from 'react'

//Props 부모가 자식에게 데이터를 넘겨준다.
//프로젝트의 안정성을 위해 양방향 쓰지않고 단반향으로만 사용한다.
// 부모만 데이터를 넘겨줄수 있다.
const Sample = () => {

//로직

const handleButtonclick= (data) => {
    console.log("click!!!!!   " ,data );
}

const [userNames, setUserNames] = useState([])

useEffect(() => {
    //컴포넌트생성시딱 한번만 실행
    const nameDatas = ["하경아","최선영","송의진"];
    setUserNames(nameDatas);


}, [])



//뷰
  return (
    <div>Sample
        {userNames.map((userName,index) => <Greeting key ={`userName_${index}`} name = {userName} onButtonClick = {handleButtonclick} /> )}

    </div>
  ) 
}
   
export default Sample   

