import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
export const HeroList = ({publisher}) => {
    const heroes =getHeroesByPublisher();
  return (
    <div>HeroList</div>
  )
}
