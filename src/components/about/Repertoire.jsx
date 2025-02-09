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
              <p className={classes.repertoireTypeTitle}>
                <b>Solo</b>
              </p>
              {repertoire.solo.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>
                <b>Solo Transcriptions</b>
              </p>
              {repertoire.soloTranscriptions.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>
                <b>Concerti</b>
              </p>
              {repertoire.concerti.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>
                <b>Contemporary Music</b>
              </p>
              {repertoire.contemporaryMusic.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>
                <b>Harp and Choir</b>
              </p>
              {repertoire.harpChoir.map((piece) => {
                return (
                  <p>
                    {piece.composer} - {piece.piece}
                  </p>
                );
              })}
              <p className={classes.repertoireTypeTitle}>
                <b>Chamber Music</b>
              </p>
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
