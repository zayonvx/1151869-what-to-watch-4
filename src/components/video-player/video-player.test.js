import React from 'react';
import renderer from "react-test-renderer";
import {VideoPlayer} from "./video-player";
import {VIDEO} from "../const";
import {moviesData} from "../../mocks/films";

it(`VideoPlayer is renderer correctly`, () => {
  const movie = moviesData[0];
  const isPlaying = true;

  const tree = renderer.create(
      <VideoPlayer
        poster={movie.image}
        src={movie.preview}
        isMuted={VIDEO.isMute}
        isPlaying={isPlaying}
        height={VIDEO.height}
        width={VIDEO.width}
      />
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
