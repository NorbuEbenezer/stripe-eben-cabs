import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
import Link from "next/link";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration from MAPBOX API
  // 1. pickupCoordinates
  // 2. dropoffCoordinates
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoibm9yYnU5OCIsImEiOiJjbDFnN3dpenMwbDlkM2pwM3RhaHo1OXZrIn0.q_5bkndG1DP-WDDJzH5CtQ`
    )
      .then((res) => res.json())
      .then((data) => {
        //if(data.routes){
        //  setRideDuration(data.routes[0].duration/10);
        // }
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, make lasting memories</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <SomeMore>{car.some}</SomeMore>
            </CarDetails>
            <Price>{"₹" + car.money}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const duration = tw.div`

`;
const Price = tw.div`
text-sm
`;

const SomeMore = tw.div`
text-xs text-blue-500
`;

const Service = tw.div`
font-medium
`;

const CarDetails = tw.div`
flex-1
`;

const CarImage = tw.img`
h-14 mr-4
`;

const Car = tw.div`
flex p-4 items-center

`;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;

const CarList = tw.div`
overflow-y-scroll
`;
const Title = tw.div`
text-gray-500 text-center text-xs  py-2 border-b
`;
