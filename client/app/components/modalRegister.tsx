import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';


interface Props {
    onClose: () => void;
}


const ModalRegister = ({ onClose }: Props) => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        funcao: '',
    });

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [funcao,setFuncao] = useState("")

    //const handleInputChange = (e:any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://127.0.0.1:8000/register/',{
                username:name, password:password,funcao:funcao
            });
            console.log('Usuário registrado com sucesso:', response.data);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
        }
    };

    return (
        <main className='w-full h-screen bg-transparent absolute top-0 backdrop-blur-lg justify-center flex'>
            <div className='mt-28 bg-bgTitle w-[55rem] h-[35rem] flex flex-col  flex-wrap relative '>
                <FontAwesomeIcon onClick={onClose} className="right-5 top-2 absolute cursor-pointer w-10 h-10 text-[#8a0907] rounded-full border-2 border-title" icon={faTimes} size='2x' />
                <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type="text" onChange={(e)=>setName(e.target.value)}  defaultValue={formData.name} placeholder='Name' className='w-72 h-14 m-auto mb-5 mt-10 border-title bg-transparent rounded-2xl border-2 outline-none text-center text-black placeholder:text-black font-bold bg-[#68c0c2]' />
                <input type='password' onChange={(e)=>setPassword(e.target.value)} defaultValue={formData.password} placeholder='Password' className='w-72 h-14 m-auto mb-5 mt-9 border-title bg-transparent rounded-2xl border-2 outline-none text-center text-black placeholder:text-black font-bold bg-[#68c0c2]' />
                <input  placeholder='ConfirmPassword' className='w-72 h-14 m-auto mb-5 mt-9 border-title bg-transparent rounded-2xl border-2 outline-none text-center text-black placeholder:text-black font-bold bg-[#68c0c2]' />
                <input type="text" onChange={(e)=>setFuncao(e.target.value)} defaultValue={formData.funcao} placeholder='Role' className='w-72 h-14 m-auto mb-5 mt-9 border-title bg-transparent rounded-2xl border-2 outline-none text-center text-black placeholder:text-black font-bold bg-[#68c0c2]' />
                <button type="submit" className=' w-52 h-16 m-auto rounded-2xl font-bold bg-transparent bg-[#00FFC6]'>Register</button>
                </form>
            </div>
        </main>
    )
}

export default ModalRegister
