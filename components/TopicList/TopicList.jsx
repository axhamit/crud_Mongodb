import React from "react";
import styles from "./TopicList.module.css";
import RemoveBtn from "../RemoveBtn/RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", // Fixed typo: "not-store" to "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

export default async function topicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div key={t.id} className={styles.mainlist}>
          <div>
            <h2>{t.title}</h2> {/* Display the topic title */}
            <div>{t.description}</div> {/* Display the topic description */}
          </div>

          <div className={styles.rytdiv}>
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={30} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
