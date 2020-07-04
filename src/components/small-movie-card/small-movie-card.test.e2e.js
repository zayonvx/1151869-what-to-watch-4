import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {moviesData} from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card should be hovered`, () => {
  const onCardHover = jest.fn();
  const onTitleClick = jest.fn();

  const card = shallow(
      <SmallMovieCard
        title={moviesData[0].title}
        image={moviesData[0].image}
        onTitleClick={onTitleClick}
        onCardHover={onCardHover}
      />
  );

  const cardLink = card.find(`a.small-movie-card__link`);
  cardLink.simulate(`mouseover`);
  expect(onCardHover).toHaveBeenCalledTimes(1);
  onCardHover.mockImplementation(() => moviesData[0]);
  expect(onCardHover()).toBe(moviesData[0]);

  const cardArticle = card.find(`article.small-movie-card catalog__movies-card`);
  cardArticle.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
  onTitleClick.mockImplementation(() => moviesData[0]);
  expect(onTitleClick()).toBe(moviesData[0]);
});
