import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from "../Home/Home";
import { Sports } from "../Sports/Sports";
import { MySports } from "../MySportEvents/MySports";
import { Blog } from "../Blog";
import { Contact } from "../Contact";
import { Session } from "../Session/Session";
import { Login } from '../Session/Login';
import { Register } from '../Session/Register';


export const MainRouter = () => {

  return (
        <>
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/deportes" element={<Sports></Sports>} />
            <Route path="/blog" element={<Blog></Blog>} />
            <Route path="/contacto" element={<Contact></Contact>} />
            <Route path="/perfil" element={<Session></Session>} />
              <Route path="/perfil/mis-deportes" element={<MySports></MySports>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
        </Routes>
    </>
  )
}
