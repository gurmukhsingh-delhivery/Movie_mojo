"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/navbar'
import movies from '../data/movies'
import MovieGrid from '../components/movieGrid'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
       <Navbar />
      {/* <CardGrid cards = {cards} /> */}
      <MovieGrid />

    </>
    
  )
}