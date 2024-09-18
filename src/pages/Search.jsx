import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [tuKhoa, setTuKhoa] = useState('');
  //useSearchParam: Lưu giá trị người dùng nhập lên url
  const [search, setSearchParam] = useSearchParams();
  //state danh sách sản phẩm từ api
  const [arrProduct,setArrayProduct] = useState([]);
  const valueKeyword = search.get('k');
  const getProductByKeyword = async () => {
   
    if(valueKeyword) {
      //Gọi api
      const res = await fetch(`https://shop.cyberlearn.vn/api/Product?keyword=${valueKeyword}`);

      const data = await res.json();
      console.log('arrProduct',data.content);
      setArrayProduct(data.content);
    }
  }
  useEffect(()=>{
    getProductByKeyword(); //gọi api dựa trên keyword
  },[valueKeyword]); //Nếu mà valueKeyword thay đổi thì useEffect này sẽ chạy lại

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    //Đưa giá trị nhập liệu lên url
    setSearchParam({
      k: tuKhoa,
      // filter:'orderbyDesc'
    });

  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h3 className='mt-2'>Search Product</h3>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="input product name" aria-label="Recipient's username" aria-describedby="basic-addon2" onInput={(e) => {
            setTuKhoa(e.target.value);
          }} />
          <button type='submit' className="input-group-text" id="basic-addon2" style={{ cursor: 'pointer' }}>Search</button>
        </div>
      </form>
      <h3 className='mt-2'>Search result</h3>
      <div className='row'>
        {arrProduct.map((prod)=>{
          return  <div className='col-3 mt-2' key={prod.id}>
          <div className='card' style={{height:200}} >
            <img alt='...' src={prod.image} className='h-100 object-fit-cover'  />
          </div>
          <div className='card-body'>
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <NavLink to={`/detail/${prod.id}`} className='btn btn-dark'>View detail</NavLink>
          </div>
        </div>
        })}
       
      </div>
    </div>
  )
}

export default Search