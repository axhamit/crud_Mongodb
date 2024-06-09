'use client';

import React, { useState } from 'react';
import styles from './addTopic.module.css';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/'); // Redirect to the home page or desired route
      } else {
        throw new Error("Failed to create a topic");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={styles.formInput}
          type='text'
          placeholder='Topic Title'
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={styles.formInput}
          type='text'
          placeholder='Topic Description'
        />
        <button type='submit' className={styles.btn}>Add Topic</button>
      </form>
    </>
  );
}
