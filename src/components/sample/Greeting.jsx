import React, { useState } from 'react'


/*
사용자의 이름을 입력받아서 인사 문구와 함께 메시지를 보여주는 컴포넌트
*/

/*
    event : 자식이 부모에게 올려준다.
*/

const Greeting = ( { name="woonho", onButtonClick }  ) => {
//로직 

    let userName = name
    // const [userName,setUserName] = useState(name);   //구조분해할당, 리턴값은 스트링변수와, 함수




    const handlClick =() => {
        
    //    setUserName(userName.toUpperCase());
       console.log("~ userName : ", userName)
       onButtonClick(name);
    }


    //view
return (
    <>
    <p>{userName}님 반갑습니다.!</p>
    <p>오늘도 좋은 하루 되세요.</p>

    <button type ="button" onClick={handlClick} className='border border-white' >대문자로 수정 </button>
    </>
  )
}

export default Greeting 