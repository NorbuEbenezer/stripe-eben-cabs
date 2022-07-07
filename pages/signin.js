import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"

const signin = () => {
  return (
    <Wrapper>
    <EbenLogo src='/eb-logo.jpg'/>
    <Title>Log in to access your account</Title>
    <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
    <SignInButton>Sign in with Google</SignInButton>
    
    

    </Wrapper>
  )
}

export default signin

const HeadImage = tw.img`
object-contain w-full
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const Wrapper = tw.div`
flex flex-col h-screen w-screen p-4
`

const EbenLogo = tw.img`
h-20 w-auto object-contain self-start

`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`