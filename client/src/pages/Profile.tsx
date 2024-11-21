'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, AudioWaveformIcon as Waveform, MoreHorizontal, ArrowLeft, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, expandHorizontal, transition } from '@/lib/animations'

const XLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5 text-white"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5 text-white"
    fill="currentColor"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
  </svg>
)

const HexagonLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5"
    fill="none"
    stroke="white"
    strokeWidth="2"
    style={{ transform: 'rotate(30deg)' }}
  >
    <path d="M21 12l-4.5 7.8H7.5L3 12l4.5-7.8h9L21 12z" />
  </svg>
)

const AnimatedWaveform = ({ isHovering }: { isHovering: boolean }) => {
  const bars = [16, 14, 18, 12, 15];
  return (
    <div className="flex gap-0.5 items-center h-6">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-white/90 rounded-full"
          animate={isHovering ? {
            height: [
              `${height}px`,
              `${height + Math.random() * 8}px`,
              `${height - Math.random() * 4}px`,
              `${height}px`
            ]
          } : { height: `${height}px` }}
          transition={{
            duration: 0.5,
            repeat: isHovering ? Infinity : 0,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default function Profile() {
  const [isHovering, setIsHovering] = useState(false)
  const [isHoveringOrange, setIsHoveringOrange] = useState(false)
  const [isHoveringBlue, setIsHoveringBlue] = useState(false)
  const [currentView, setCurrentView] = useState<'initial' | 'expanded' | 'content' | 'links'>('initial')
  const [hoveredButton, setHoveredButton] = useState<'back' | 'notes' | 'twitter' | 'linkedin' | 'uncanny' | null>(null)

  const handleAvatarClick = () => {
    if (currentView === 'content' || currentView === 'links') {
      setCurrentView('expanded')
    } else if (currentView === 'expanded') {
      setCurrentView('initial')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <AnimatePresence mode="wait">
        {currentView === 'initial' && (
          <motion.div 
            layout
            layoutId="container"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              ...transition,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="flex items-center bg-zinc-900 rounded-full p-2 gap-2 shadow-lg w-fit"
          >
            <Avatar 
              className="h-12 w-12 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleAvatarClick}
            >
              <AvatarImage 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20at%205.54.40%20PM-nXJZFXA1OVDVrKuLGZ5O4pIumUc0Ll.png"
                alt="Profile picture" 
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div 
              className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setCurrentView('expanded')}
            >
              <Plus className={`h-8 w-8 text-white transition-transform duration-300 ${isHovering ? 'animate-spin-fast' : ''}`} />
            </div>
          </motion.div>
        )}

        {currentView === 'expanded' && (
          <motion.div 
            layout
            layoutId="container"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              ...transition,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="flex items-center bg-zinc-900 rounded-full p-2 pr-3 gap-3 shadow-lg"
          >
            <Avatar 
              className="h-14 w-14 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleAvatarClick}
            >
              <AvatarImage 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-18%20at%205.54.40%20PM-nXJZFXA1OVDVrKuLGZ5O4pIumUc0Ll.png"
                alt="Profile picture" 
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-3">
              <div className="text-white">
                <p className="text-base opacity-80">Hello, I'm</p>
                <p className="text-lg font-medium">Arthur</p>
              </div>
              <div className="flex gap-2">
                <button 
                  className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110"
                  onClick={() => setCurrentView('content')}
                  onMouseEnter={() => setIsHoveringOrange(true)}
                  onMouseLeave={() => setIsHoveringOrange(false)}
                >
                  <AnimatedWaveform isHovering={isHoveringOrange} />
                </button>
                <button 
                  className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  onClick={() => setCurrentView('links')}
                  onMouseEnter={() => setIsHoveringBlue(true)}
                  onMouseLeave={() => setIsHoveringBlue(false)}
                >
                  <MoreHorizontal className={`h-6 w-6 text-white transition-transform duration-300 ${isHoveringBlue ? 'animate-spin-fast' : ''}`} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black rounded-[32px] p-8 max-w-[600px] w-full cursor-pointer shadow-lg"
            onClick={() => setCurrentView('expanded')}
          >
            <div className="space-y-4">
              {[
                { text: "Hi, I am ", highlight: "Arthur Simonian", rest: ". I am a ", highlight2: "creative", rest2: " entrepreneur with too many ideas. Sometimes, I don't know if that is a good thing or a bad thing." },
                { text: "I started my journey in event planning and creative management while studying ", highlight: "marketing", rest: " and ", highlight2: "psychology", rest2: " in California. Shortly after graduation I dived into the Web3 world as a researcher and investor while working on different web3 projects from DeFi to Gaming." },
                { text: "Eventually, I landed in ", highlight: "AI", rest: ", more specifically in the decentralized AI sector where my first real start-up is navigating in." },
                { text: "I am currently learning and building in the ", highlight: "open", rest: ". Follow me for my next moves. ", highlight2: "Lates!", rest2: "" }
              ].map((item, index) => (
                <motion.p
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                  className="text-lg leading-relaxed text-gray-400"
                  >
                  {item.text}
                  <span className="text-white">{item.highlight}</span>
                  {item.rest}
                  {item.highlight2 && <span className="text-white">{item.highlight2}</span>}
                  {item.rest2}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

        {currentView === 'links' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center bg-zinc-900 rounded-full p-2 gap-3 shadow-lg"
          >
            <div 
              className="flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-colors px-2 py-1 cursor-pointer"
              onMouseEnter={() => setHoveredButton('back')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setCurrentView('expanded')}
            >
              <ArrowLeft className="h-5 w-5 text-white" />
              <AnimatePresence>
                {hoveredButton === 'back' && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm text-white font-medium overflow-hidden whitespace-nowrap"
                  >
                    Back
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="flex gap-2">
              {[
                { type: 'notes', icon: <FileText className="h-5 w-5 text-white" />, label: 'ReadCV', url: 'https://read.cv/simonian' },
                { type: 'twitter', icon: <XLogo />, label: 'X', url: 'https://x.com/uncannycomposer/' },
                { type: 'linkedin', icon: <LinkedInLogo />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/simonianarthur' },
                { type: 'uncanny', icon: <HexagonLogo />, label: 'Uncanny', url: 'https://uncannylabs.ai/' }
              ].map(({ type, icon, label, url }) => (
                <div
                  key={type}
                  className="flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-colors px-2 py-1 cursor-pointer"
                  onMouseEnter={() => setHoveredButton(type as any)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => window.open(url, '_blank')}
                >
                  {icon}
                  <AnimatePresence>
                    {hoveredButton === type && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        className="text-sm text-white font-medium overflow-hidden whitespace-nowrap"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-fast {
          animation: spin 0.5s linear infinite;
        }
      `}</style>
    </div>
  )
}
