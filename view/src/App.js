import "./App.css";
import { useState } from "react";

function App() {
  const [helloData, setHelloData] = useState({
    fullname: "",
    email: "",
  });
  const [elementHello, setElementHello] = useState(<></>);
  const { fullname, email } = { helloData };
  const onchangeHelloForm = (e) => {
    setHelloData({ ...helloData, [e.target.className]: e.target.value });
  };
  const sayHello = (e) => {
    e.preventDefault();
    const fullname = helloData.fullname;
    const email = helloData.email;
    if (!fullname || !email) {
      setElementHello(
        <>
          <p>Vui lòng điền đầy đủ thông tin</p>
        </>
      );
    } else {
      setElementHello(
        <>
          <p>
            Chào bạn {fullname}, email của bạn là {email}.
          </p>
        </>
      );
    }
  };

  return (
    <div className='My-App'>
      <form onSubmit={sayHello} className='form'>
        <h2>NHẬP THÔNG TIN</h2>
        <input
          className='fullname'
          value={fullname}
          placeholder='Họ và tên'
          type='text'
          onChange={onchangeHelloForm}
          required
        />
        <input
          className='email'
          value={email}
          placeholder='Email'
          type='text'
          onChange={onchangeHelloForm}
          required
        />
        <button type='submit' className='btn-submit'>
          Send
        </button>
      </form>
      <hr />
      {elementHello}
    </div>
  );
}

export default App;
