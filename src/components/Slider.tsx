import React from 'react'
import SliderItemsType from "./types/SliderItemsType";
import SliderItemsContainer from './SliderItemsContainer.tsx';

type Props = {}

const Slider = (props: Props) => {
	const products: SliderItemsType[] = [
    {
      "number": 1
    },
    {
      "number": 2
    },
    {
      "number": 3
    },
    {
      "number": 4
    },
    {
      "number": 5
    },
    {
      "number": 6
    },
  ]; 

  return (
    <main> 
      <h2>Products</h2>
      <SliderItemsContainer products={products} />
    </main>
  );
}

export default Slider;