'use client';

import React from 'react';
import styles from './RemoveBtn.module.css';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id, onRemove }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: 'DELETE',
        });

        if (res.ok) {
       router.refresh();
        } else {
          console.error('Failed to delete the topic');
        }
      } catch (error) {
        console.error('Error deleting topic:', error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className={styles.deletebtn}>
      <HiOutlineTrash size={30} />
    </button>
  );
};

export default RemoveBtn;
