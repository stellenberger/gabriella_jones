import React from "react";
import ReactPlayer from "react-player";
import {
  ApplePodcasts,
  InnerNoiseHero,
  Instagram,
  InstagramBlack,
  Spotify,
} from "../../media";

export default function InnerNoise() {
  return (
    <div>
      <img src={InnerNoiseHero} alt="Apple Podcasts" className="" />
      <p className={"mb-5 mt-5"}>
        The classical music world is evolving, with a growing focus on
        inclusion, diversity, and honest conversations. Inner Noise is my
        contribution to this shift—a space for exploring the stories behind the
        artists.
      </p>
      <p className={"mb-5"}>
        Through solo episodes and interviews with fellow freelance creatives,
        we’ll dive into their journeys—celebrating successes, unpacking
        struggles, and uncovering what shapes them as individuals and artists.
      </p>
      <p className={"mb-5"}>
        Expect raw and inspiring stories as we navigate the realities of
        artistic careers, embrace vulnerability, and spark meaningful
        connections. This is a space for creativity, identity, and candid
        conversations.
      </p>
      <iframe
        style={{ borderRadius: "12px" }}
        className={"mb-5"}
        src="https://open.spotify.com/embed/episode/2G2Gy5q9jnCaFJ1eBUq2Lb?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      {/* @ts-ignore */}
      <ReactPlayer
        className={"mb-5 "}
        url={"https://www.youtube.com/watch?v=3YVat41VB8U"}
        width="100%"
        height="45vh"
      />

      <p className={"mb-5 mt-5"}>
        <b>In conversation with Katrina Lee</b>, a violinist hailing from
        Huddersfield. Katrina is currently based in Glasgow. Katrina’s
        illustrious career has seen her perform extensively with some of the
        UK's most renowned orchestras and ensembles, including the BBC Scottish
        Symphony Orchestra, Scottish Chamber Orchestra, London @innernoisepod
        Philharmonic Orchestra, BBC Philharmonic Orchestra, and Royal Northern
        Sinfonia as well as Scottish Ballet Orchestra, where she holds the
        position of Principal Second Violin. She has toured internationally,
        bringing her music to audiences in concert halls across Asia, South
        America, and Europe. She is a lecturer in the Strings faculty at the
        Royal Conservatoire of Scotland, where she is passionate about nurturing
        the next generation of musicians with a holistic and thoughtful
        approach.
      </p>
      <p className={"mb-5"}>
        Looking ahead, she will be mentoring young musicians through exciting
        upcoming projects with the National Youth Orchestra of Scotland and the
        Benedetti Foundation. We’ll discuss her early life, growth mindset,
        evolving career, and an exciting future project.
      </p>
      <p>
        Beyond her professional accomplishments, Katrina is known for her
        incredible work ethic and her culinary talents. She is a force of
        nature, and I’m proud to call her my friend.
      </p>
      <footer className="bg-gray-200 py-4 px-6 mt-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2">
              <img
                src={ApplePodcasts}
                alt="Apple Podcasts"
                className="h-6 w-6"
              />
              <span className="text-sm">Listen on Apple Podcasts</span>
            </a>
            <a href="#" className="flex items-center">
              <img src={Spotify} alt="Spotify" className="h-6 w-6" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm">
              @innernoisepod
            </a>
            <a href="#">
              <img
                src={InstagramBlack}
                alt="Instagram logo"
                className={"color-black h-6 w-6"}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
