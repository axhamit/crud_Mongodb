// edittopic.js
'use client'
import React, { useState } from 'react'
import styles from './edittopic.module.css'
import { useRouter } from 'next/navigation'

const Page = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json" // Corrected typo in Content-Type
        },
        body: JSON.stringify({ newTitle, newDescription })
      });
      if (!res.ok) {
        throw new Error("Failed to Update Topic")
      }
      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setNewTitle(e.target.value)} // Moved onChange and value props to the input element
          value={newTitle}
          className={styles.formInput}
          type='text'
          placeholder='Edit Title'
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)} // Added onChange and value props to the input element
          value={newDescription}
          className={styles.formInput}
          type='text'
          placeholder='Edit Description '
        />
        {/* Moved onChange and value props to the input element */}
        <button type='submit' className={styles.btn}>Edit Topic</button>
      </form>
    </>
  )
}

export default Page
