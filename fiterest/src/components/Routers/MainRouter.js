import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from "../Home/Home";
import { Sports } from "../Sports/Sports";
import { Blog } from "../Blog";
import { Contact } from "../Contact";


export const MainRouter = () => {

  return (
        <>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/deportes" element={<Sports></Sports>} />
            <Route path="/blog" element={<Blog></Blog>} />
            <Route path="/contacto" element={<Contact></Contact>} />
        </Routes>
    </>
  )
}
