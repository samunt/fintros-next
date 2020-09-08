import React from 'react';
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";
import {ThemeProvider} from "../contexts/ThemeContext";

export default function Home() {
  return (
      <ThemeProvider>
        <NavBar title="Fintros App"/>
        <Blog title="hello"/>
      </ThemeProvider>
  )
}
