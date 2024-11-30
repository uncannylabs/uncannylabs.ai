'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, AudioWaveformIcon as Waveform, MoreHorizontal, ArrowLeft, FileText, RefreshCw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Shared animation configurations
const springTransition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
  mass: 1
}

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const expandHorizontalVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 'auto', opacity: 1 },
  exit: { width: 0, opacity: 0 }
}

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
  <RefreshCw className="h-5 w-5 text-white" />
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
            ease: "easeInOut"
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
      <AnimatePresence mode="wait" initial={false}>
        {currentView === 'initial' && (
          <motion.div 
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
            className="flex items-center bg-zinc-900 rounded-full p-2 gap-2 shadow-lg w-fit"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={springTransition}
            >
              <Avatar 
                className="h-12 w-12 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleAvatarClick}
              >
                <AvatarImage 
                  src="/logo1.png"
                  alt="Profile picture" 
                  className="object-cover"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div 
              className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={springTransition}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setCurrentView('expanded')}
            >
              <Plus className={`h-8 w-8 text-white transition-all duration-300 ${isHovering ? 'rotate-180 scale-110' : ''}`} />
            </motion.div>
          </motion.div>
        )}

        {currentView === 'expanded' && (
          <motion.div 
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
            className="flex items-center bg-zinc-900 rounded-full p-2 pr-3 gap-3 shadow-lg"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={springTransition}>
              <Avatar 
                className="h-14 w-14 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleAvatarClick}
              >
                <AvatarImage 
                  src="/logo1.png"
                  alt="Profile picture" 
                  className="object-cover"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </motion.div>
            <div className="flex items-center gap-3">
              <motion.div 
                className="text-white"
                variants={fadeInUpVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                <motion.p 
                  className="text-base opacity-80"
                  variants={fadeInUpVariants}
                  transition={{ delay: 0.2 }}
                >
                  We are
                </motion.p>
                <motion.p 
                  className="text-lg font-medium"
                  variants={fadeInUpVariants}
                  transition={{ delay: 0.3 }}
                >
                  Uncanny
                </motion.p>
              </motion.div>
              <div className="flex gap-2">
                <motion.button 
                  className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600"
                  whileHover={{ scale: 1.1 }}
                  transition={springTransition}
                  onClick={() => setCurrentView('content')}
                  onMouseEnter={() => setIsHoveringOrange(true)}
                  onMouseLeave={() => setIsHoveringOrange(false)}
                >
                  <AnimatedWaveform isHovering={isHoveringOrange} />
                </motion.button>
                <motion.button 
                  className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600"
                  whileHover={{ scale: 1.1 }}
                  transition={springTransition}
                  onClick={() => setCurrentView('links')}
                  onMouseEnter={() => setIsHoveringBlue(true)}
                  onMouseLeave={() => setIsHoveringBlue(false)}
                >
                  <MoreHorizontal className={`h-6 w-6 text-white transition-all duration-300 ${isHoveringBlue ? 'rotate-180 scale-110' : ''}`} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {currentView === 'content' && (
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
            className="bg-black rounded-[32px] p-8 max-w-[600px] w-full cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => setCurrentView('expanded')}
          >
            <div className="space-y-4">
              {[
                { text: "A ", highlight: "new renaissance", rest: " is upon us, the merging of man and machine." },
                { text: "", highlight: "Collaborators", rest: " not competitors, aligned and in ", highlight2: "sync", rest2: "." },
                { text: "We are ", highlight: "Uncanny Labs", rest: ", the architects incubating a new world, a playground for autonomous intelligence." },
                { text: "Welcome to the ", highlight: "4th Industrial Revolution", rest: ", where synthetic becomes sublime, where the lines between creator and creation now dissolved." },
                { text: "Cross the ", highlight: "uncanny valley", rest: " with us - a bridge not a boundary." },
                { text: "Enter our world, the ", highlight: "Uncanny World", rest: "." }
              ].map((item, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUpVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ 
                    ...springTransition,
                    delay: index * 0.1,
                    exit: { delay: (5 - index) * 0.05 }
                  }}
                  className="text-lg leading-relaxed text-gray-400"
                >
                  {item.text}
                  <motion.span 
                    className="text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={springTransition}
                  >
                    {item.highlight}
                  </motion.span>
                  {item.rest}
                  {item.highlight2 && (
                    <motion.span 
                      className="text-white"
                      whileHover={{ scale: 1.05 }}
                      transition={springTransition}
                    >
                      {item.highlight2}
                    </motion.span>
                  )}
                  {item.rest2}
                </motion.p>
              ))}
            </div>
          </motion.div>
        )}

        {currentView === 'links' && (
          <motion.div 
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={springTransition}
            className="flex items-center bg-zinc-900 rounded-full p-2 gap-3 shadow-lg"
          >
            <motion.div 
              className="flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-colors px-2 py-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={springTransition}
              onMouseEnter={() => setHoveredButton('back')}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setCurrentView('expanded')}
            >
              <ArrowLeft className="h-5 w-5 text-white" />
              <AnimatePresence>
                {hoveredButton === 'back' && (
                  <motion.span
                    variants={expandHorizontalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                    className="text-sm text-white font-medium overflow-hidden whitespace-nowrap"
                  >
                    Back
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="flex gap-2">
              {[
                { type: 'notes', icon: <FileText className="h-5 w-5 text-white" />, label: 'Manifesto', url: 'https://uncanny-labs.gitbook.io/uncanny-world' },
                { type: 'uncanny', icon: <HexagonLogo />, label: 'World', url: 'http://world.uncannylabs.ai/' },
                { type: 'linkedin', icon: <LinkedInLogo />, label: 'Sync', url: 'http://sync.uncannylabs.ai/' },
                { type: 'twitter', icon: <XLogo />, label: '@uncanny_labs', url: 'https://x.com/uncanny_labs' }
              ].map(({ type, icon, label, url }) => (
                <motion.div
                  key={type}
                  className="flex items-center gap-2 rounded-full hover:bg-zinc-800 transition-colors px-2 py-1 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={springTransition}
                  onMouseEnter={() => setHoveredButton(type as any)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => window.open(url, '_blank', 'noopener noreferrer')}
                >
                  {icon}
                  <AnimatePresence>
                    {hoveredButton === type && (
                      <motion.span
                        variants={expandHorizontalVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={springTransition}
                        className="text-sm text-white font-medium overflow-hidden whitespace-nowrap"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
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
