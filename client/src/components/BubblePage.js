import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=> {
    axiosWithAuth()
    .get("colors")
    .then(res => {
      console.log(err);
    });
  }, []);

  useEffect(()=> {
    const getColors = () => {
     axio
      .get("http://localhost:5000/api/colors/")
      .then(res => {
        console.log(res);
        setColorList(res.data);
      })
      .catch(error => console.log(error));
  };
  getColors();
 }, []);


  return (
    <>
      <h1>Making Magic</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
