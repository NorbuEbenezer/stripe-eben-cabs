import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import ReactStars from "react-stars";

export default function Home() {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/payment">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Header>
        <EbenLogo src="/eb-logo.jpg" />
      </Header>

      <Thankyou src="/thankyou.jpg" />

      <Link href="http://localhost:3000/">
        <PaymentButtonContainer>
          <PaymentButton>Ride Again!</PaymentButton>
        </PaymentButtonContainer>
      </Link>

      <Rating>
        <div>
          <h2>Kindly rate your experience with us!</h2>
          <Star>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
          </Star>
        </div>
      </Rating>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen font-medium
`;

const ActionItems = tw.div`
  flex-1 p-4
`;
const Header = tw.div`
flex items-center flex justify-center
`;
const Rating = tw.div`
flex items-center flex justify-center text-lg
`;

const Star = tw.div`
flex items-center flex justify-center
`;
const EbenLogo = tw.img`
  h-28 

`;
const Thankyou = tw.img`
h-30

`;

const Profile = tw.div`
  flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-sm

`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px

`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl

`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`;

const PaymentButton = tw.div`
bg-black text-white my-10 mx-4 py-4 text-center text-xl
 text-white py-2 px-4 
`;

const PaymentButtonContainer = tw.div`
border-t-2 
`;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
`;

const BackButton = tw.img`
h-full  object-contain `;
