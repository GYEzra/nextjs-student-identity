import React from 'react'
import {HeroSection,Gallery,NFTGallery } from "@/components/blog";
import { NextPage } from 'next';
const Blog:NextPage = () => {
  return (
    <div>
        <NFTGallery/>
        <Gallery/>
        <HeroSection/>
    </div>
  )
}

export default Blog