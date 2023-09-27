'use client';
import axios from 'axios';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import DeleteMachine from './DeleteMachine';

const Card = ({}) => {
  const [handleDelete, setHandleDelete] = useState(false);

  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('http://127.0.0.1:8000/equipamentos/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {});
  }

  return (
    <main>
      <div className='ml-3 max-w-screen-lg mx-auto my-16 relative flex flex-wrap border-b-2 border-title border-dashed h-80'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeCdlt2IHqf-fd13RwXIueOpuWHR4oiL0Kno0ElEs&s'
          alt=''
          className='w-80 h-72 object-cover border-2 border-black'
        />
        <div className='flex-1 p-6'>
          <h1 className='font-semibold text-4xl mb-4'>
            Equipamento de automação
          </h1>
          <p className='text-lg mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            expedita quis pariatur officiis eos, a consequatur fugit delectus
            ratione qui modi hic minus voluptatem ut quaerat ipsam esse nihil
            quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            quas.
          </p>
          <div className='flex items-center'>
            <CommentIcon style={{ fontSize: 50 }} className='mr-4' />
            <DeleteIcon
              className='cursor-pointer'
              onClick={() => setHandleDelete(true)}
              style={{ fontSize: 50 }}
            />
          </div>
        </div>
      </div>
      {handleDelete && <DeleteMachine onClose={() => setHandleDelete(false)} />}
    </main>
  );
};

export default Card;
