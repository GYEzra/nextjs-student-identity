import React from 'react'
import { Navbar,HeroSection, Footer,Gallery,NFTGallery } from "@/components/ui";
import { NextPage } from 'next';
const Blog:NextPage = () => {
  return (
    <div>
        <Navbar/>
        <NFTGallery/>
        <Gallery/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default Blog