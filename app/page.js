"use client";
import styles from "./page.module.css";
import { data } from "./api";
import { useState } from "react";
import Filter from "./components/component";
import Image from "next/image";
console.log(data);

export default function Home() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const searchFilter = (array) => {
    return array.filter((el) => el.name.toLowerCase().includes(query));
  };
  const filtered = searchFilter(data);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  let tagList = [
    "All",
    "Slots",
    "Adventure",
    "Roulette",
    "Card Games",
    "Arcade",
    "Dice",
    "Puzzle",
  ];

  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  const filterTags = (array) => {
    if (activeTag.toLowerCase() == "all") {
      return array;
    } else {
      return array.filter(
        (el) => el.category.toLowerCase() == activeTag.toLocaleLowerCase()
      );
    }
  };
  let filteredList = filterTags(data);
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.inputContainer}>
          <input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className={styles.input}
          />
        </div>
        <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag} />
      </header>
      <div className={styles.body}>
        {query != ""
          ? filtered.map((el, i) => (
              <div className={styles.cards} key={el.id}>
                <div className={styles.img}>
                  <Image src={el.imgUrl} alt="Picture of the author" fill />
                </div>
                <div>category:{el.category}</div>
                <div
                  className="w-full border-[1px] border-gray-500 px-2 rounded-xl py-4"
                  key={i}
                >
                  Name:{el.name}
                </div>
              </div>
            ))
          : filteredList.map((el, i) => (
              <div className={styles.cards} key={el.id}>
                <div className={styles.img}>
                  <Image src={el.imgUrl} alt="Picture of the author" fill />
                </div>
                <div>category:{el.category}</div>
                <div
                  className="w-full border-[1px] border-gray-500 px-2 rounded-xl py-4"
                  key={i}
                >
                  Name:{el.name}
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}
