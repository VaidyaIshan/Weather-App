'use client';
import Navbar from './components/navbar.js';
import Texts from './components/text.js';
import React from 'react';
export default function Home(){
  return(<>
  <Navbar></Navbar>
  <div className="flex items-center justify-center mt-32">
  <Texts></Texts>
  </div>

  </>
  );

}