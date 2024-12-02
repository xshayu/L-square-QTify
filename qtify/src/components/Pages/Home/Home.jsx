import React from "react";
import Hero from "../../Hero/Hero";
import Navbar from "../../Navbar/Navbar";
import sectionStyles from "../../Section/section.module.css";
import Section from "../../Section/Section";
import { useState, useEffect } from "react";
import { fetchData } from "../../../api/api";
import FAQs from "../../FAQs/FAQs";
import Footer from "../../Footer/Footer";

function HomePage() {
  const [data, setData] = useState({
    topAlbum: [],
    newAlbum: [],
    songs: [],
    genres: [],
  });

  const populateData = async () => {
    const [topAlbumData, newAlbumData, songsData, genresData] = await Promise.all([
      fetchData('TopAlbum'),
      fetchData('NewAlbum'),
      fetchData('Songs'),
      fetchData('Genres'),
    ]);

    setData({
      topAlbum: topAlbumData || [],
      newAlbum: newAlbumData || [],
      songs: songsData || [],
      genres: genresData?.data || [],
    });
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <>
      <Navbar page={"home"} />
      <Hero />
      <div className={sectionStyles.sectionWrapper}>
        <Section title="Top Albums" data={data.topAlbum} type="album" />
        <Section title="New Albums" data={data.newAlbum} type="album" />
        <hr />
        <Section title="Songs" data={data.songs} type="songs" genres={data.genres} />
        <FAQs />
        <hr style={{ backgroundColor: "gray", border: "1px solid gray" }} />
        <Footer />
        <hr />
      </div>
    </>
  );
}

export default HomePage;
