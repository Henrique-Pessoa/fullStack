"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash,faRightToBracket  } from '@fortawesome/free-solid-svg-icons';
import ModalRegister from './components/modalRegister';
import { register } from 'module';

export default function Home() {
  const [password,setPassword] = useState<string>("")
  const [show,setShow] = useState<boolean>(false)
  const [register,setRegister] = useState<boolean>(false)

  const inputNUm = (e:any)=>{
    setPassword(password + e.target.value)

  }
  const clear = () =>{
  setPassword("")
  }

  return (
    <main className='bg-bgColor w-full h-screen'>
      <div className='flex justify-center sticky top-11'>
        <div className='bg-bgTitle w-60 mr-3 relative flex justify-end h-36'>
          <h1 className='text-white text-8xl z-20 absolute bottom-0 transformtext-right'>ATV</h1>
        </div>
        <h1 className='text-title text-8xl relative top-12'>WEB</h1>
      </div>
      <div className='bg-white w-[38rem] h-[38rem] m-auto mt-16 text-center relative'>
        <FontAwesomeIcon icon={show ? faEye : faEyeSlash} onClick={()=> setShow(!show)} className="w-8 h-8 absolute mt-10 right-9 cursor-pointer "/>
        <input type={show ? 'text' : 'password'} disabled={true} value={password} className=' text-center relative  border-b-2 border-solid border-0 border-[#949d9c] outline-none w-96 mt-10 bg-transparent '/>
      <div className='flex flex-wrap mt-10 w-80 m-auto ml-40 gap-5'>
        <button value={1} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>1</button>
        <button value={2} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>2</button>
        <button value={3} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>3</button>
        <button value={4} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>4</button>
        <button value={5} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>5</button>
        <button value={6} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>6</button>
        <button value={7} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>7</button>
        <button value={8} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>8</button>
        <button value={9} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>9</button>
        <button onClick={clear}  className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110 '>C</button>
        <button value={0} onClick={inputNUm} className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110'>0</button>
        <button  className=' border-bgColor rounded-full w-20 h-20  border-solid text-title border-2 font-sans text-3xl hover:bg-bgTitle hover:scale-110 '><FontAwesomeIcon icon={faRightToBracket} /></button>
      </div>
      <button  onClick={()=>setRegister(true)} className='bg w-52 h-11 mt-11 text-bgColor border-title rounded-2xl font-bold text-xl bg-bgTitle border-2 '>Register</button>
      </div>
      {register && (<ModalRegister onClose={()=>setRegister(false)}/>)}
    </main>
  )
}
