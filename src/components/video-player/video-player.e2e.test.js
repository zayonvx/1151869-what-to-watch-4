import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {VideoPlayer} from "./video-player";
import {VIDEO} from "../const";
import {moviesData} from "../../mocks/films";

const movie = moviesData[0];
const isPlaying = false;

Enzyme.configure({
  adapter: new Adapter()
});


it(`VideoPlayer started and paused correctly`, () => {
  const player = mount(
      <VideoPlayer
        poster={movie.image}
        width={VIDEO.width}
        src={movie.preview}
        height={VIDEO.height}
        isMuted={VIDEO.isMute}
        isPlaying={isPlaying}
      />
  );

  expect(player.props().isPlaying).toEqual(false);
  // player.setProps({isPlaying: true});
  // expect(player.props().isPlaying).toEqual(true);
});
