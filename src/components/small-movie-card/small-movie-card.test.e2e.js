import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';
import {moviesData} from '../../mocks/films';

const testData = moviesData[Math.random(moviesData.length - 1)];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Card should be hovered`, () => {
  const onHover = jest.fn();

  const card = shallow(
      <SmallMovieCard
        title = {testData.title}
        image = {testData.image}
        onTitleClick = {() => {}}
        onHover = {onHover}
      />
  );

  const cardLink = card.find(`a.small-movie-card__link`);
  cardLink.simulate(`mouseover`);
  expect(onHover).toHaveBeenCalledTimes(1);
  onHover.mockImplementation(() => testData);
  expect(onHover()).toBe(testData);
});
