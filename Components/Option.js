"use client";
import React, { useState } from "react";
import { PiHandFistFill } from "react-icons/pi";
import { MdFrontHand } from "react-icons/md";
import { FaHandScissors } from "react-icons/fa6";
import Desition from "./Desition";
import Score from "./Score";

const Option = () => {
  const [store, setstore] = useState("");
  const [store_2, setstore_2] = useState("");
  const [you_score, setyou_score] = useState(0);
  const [com_score, setcom_score] = useState(0);

  const rock = () => {
    let value = Math.random();
    if (value >= 0 && value <= 1 / 3) {
      setstore("rock");
    } else if (value >= 1 / 3 && value <= 2 / 3) {
      setstore("paper");
    } else {
      setstore("siccor");
    }

    if (store == "rock") {
      setstore_2("Tie😫😫");
    } else if (store == "paper") {
      setstore_2("You Loser😭😭");
      setcom_score(() => com_score + 1);
    } else {
      setstore_2("You won😎😎");
      setyou_score(() => you_score + 1);
    }
  };

  const paper = () => {
    let value = Math.random();
    if (value >= 0 && value <= 1 / 3) {
      setstore("rock");
    } else if (value >= 1 / 3 && value <= 2 / 3) {
      setstore("paper");
    } else {
      setstore("siccor");
    }

    if (store == "rock") {
      setstore_2("You won😎😎");
      setyou_score(() => you_score + 1);
    } else if (store == "paper") {
      setstore_2("Tie 😫😪");
    } else {
      setstore_2("You Loser😭😭");

      setcom_score(() => com_score + 1);
    }
  };

  const siccor = () => {
    let value = Math.random();
    if (value >= 0 && value <= 1 / 3) {
      setstore("rock");
    } else if (value >= 1 / 3 && value <= 2 / 3) {
      setstore("paper");
    } else {
      setstore("siccor");
    }

    if (store == "rock") {
      setstore_2("You Loser😎😎");
      setcom_score(() => com_score + 1);
    } else if (store == "paper") {
      setstore_2("You won😎😎");
      setyou_score(() => you_score + 1);
    } else {
      setstore_2("Tie 😖😖");
    }
  };

  return (
    <>
      <Score you_score={you_score} com_score={com_score} />
      <br />
      <br />
      <div className="option d-flex justify-content-between col-5">
        <button className="rounded-circle fs" onClick={rock}>
          <PiHandFistFill />
        </button>
        <button className="rounded-circle fs" onClick={paper}>
          <MdFrontHand />
        </button>
        <button className="rounded-circle fs" id="fs_1" onClick={siccor}>
          <FaHandScissors />
        </button>
      </div>
      <hr className=" text-light col-5" />
      <Desition store_2={store_2} />
      <br />
      <br />
    </>
  );
};

export default Option;
