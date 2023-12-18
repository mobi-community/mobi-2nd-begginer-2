const Posts = ({info}) =>{
    return <table>
    <thead>
      <tr>
        <th>회원번호</th>
        <th>이름</th>
        <th>생년월일</th>
        <th>전화번호</th>
        <th>로그인시간</th>
      </tr>
    </thead>
    <tbody>
      {info.map((list)=>(<tr>
          <td>{list.id}</td>
          <td>{list.name}</td>
          <td>{list.birth}</td>
          <td>{list.phone}</td>
          <td>{list.lastestlogin}</td>
        </tr>))}
        
    </tbody>
  </table>

}

export default Posts;