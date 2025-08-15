"use client"

import React from 'react'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { HeroStats } from '@/components/sections/HeroStats'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Pricing } from '@/components/sections/Pricing'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { Clients } from '@/components/sections/Clients'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

const RootPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <HeroStats />
        <Features />
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
    </div>
  )
}

export default RootPage