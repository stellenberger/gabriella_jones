import React from "react";
import repertoire from "../../information/repertoire.json";
import classes from "./About.module.scss";

const Repertoire = () => {
  return (
    <div>
      {repertoire &&
        repertoire.repertoire.map((repertoire) => {
          return (
            <div>
              <p className={classes.repertoireTypeTitle}>Solo</p>
              {repertoire.solo.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>Solo Transcriptions</p>
              {repertoire.soloTranscriptions.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>Concerti</p>
              {repertoire.concerti.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>Contemporary Music</p>
              {repertoire.contemporaryMusic.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>Harp and Choir</p>
              {repertoire.harpChoir.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>Chamber Music</p>
              {repertoire.chamberMusic.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Repertoire;
