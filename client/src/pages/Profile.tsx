'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, AudioWaveformIcon as Waveform, MoreHorizontal, ArrowLeft, FileText, RefreshCw } from 'lucide-react'

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

export default function Profile() {
  const [currentView, setCurrentView] = useState<'initial' | 'expanded' | 'content' | 'links'>('initial')

  const handleAvatarClick = () => {
    if (currentView === 'content' || currentView === 'links') {
      setCurrentView('expanded')
    } else if (currentView === 'expanded') {
      setCurrentView('initial')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      {currentView === 'initial' && (
        <div className="flex items-center bg-zinc-900 rounded-full p-2 gap-2 shadow-lg w-fit">
          <div>
            <Avatar 
              className="h-12 w-12 flex-shrink-0 cursor-pointer"
              onClick={handleAvatarClick}
            >
              <AvatarImage 
                src="/logo1.png"
                alt="Profile picture" 
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <div 
            className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center cursor-pointer"
            onClick={() => setCurrentView('expanded')}
          >
            <Plus className="h-8 w-8 text-white" />
          </div>
        </div>
      )}

      {currentView === 'expanded' && (
        <div className="flex items-center bg-zinc-900 rounded-full p-2 pr-3 gap-3 shadow-lg">
          <div>
            <Avatar 
              className="h-14 w-14 flex-shrink-0 cursor-pointer"
              onClick={handleAvatarClick}
            >
              <AvatarImage 
                src="/logo1.png"
                alt="Profile picture" 
                className="object-cover"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-white">
              <p className="text-base opacity-80">We are</p>
              <p className="text-lg font-medium">Uncanny</p>
            </div>
            <div className="flex gap-2">
              <button 
                className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center"
                onClick={() => setCurrentView('content')}
              >
                <Waveform className="h-6 w-6 text-white" />
              </button>
              <button 
                className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center"
                onClick={() => setCurrentView('links')}
              >
                <MoreHorizontal className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {currentView === 'content' && (
        <div
          className="bg-black rounded-[32px] p-8 max-w-[600px] w-full cursor-pointer shadow-lg"
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
              <p key={index} className="text-lg leading-relaxed text-gray-400">
                {item.text}
                <span className="text-white">{item.highlight}</span>
                {item.rest}
                {item.highlight2 && (
                  <span className="text-white">{item.highlight2}</span>
                )}
                {item.rest2}
              </p>
            ))}
          </div>
        </div>
      )}

      {currentView === 'links' && (
        <div className="flex items-center bg-zinc-900 rounded-full p-2 gap-3 shadow-lg">
          <div 
            className="flex items-center gap-2 rounded-full hover:bg-zinc-800 px-2 py-1 cursor-pointer"
            onClick={() => setCurrentView('expanded')}
          >
            <ArrowLeft className="h-5 w-5 text-white" />
            <span className="text-sm text-white font-medium">Back</span>
          </div>
          <div className="flex gap-2">
            {[
              { type: 'notes', icon: <FileText className="h-5 w-5 text-white" />, label: 'Manifesto', url: 'https://uncanny-labs.gitbook.io/uncanny-world' },
              { type: 'uncanny', icon: <HexagonLogo />, label: 'World', url: 'http://world.uncannylabs.ai/' },
              { type: 'linkedin', icon: <LinkedInLogo />, label: 'Sync', url: 'http://sync.uncannylabs.ai/' },
              { type: 'twitter', icon: <XLogo />, label: '@uncanny_labs', url: 'https://x.com/uncanny_labs' }
            ].map(({ type, icon, label, url }) => (
              <div
                key={type}
                className="flex items-center gap-2 rounded-full hover:bg-zinc-800 px-2 py-1 cursor-pointer"
                onClick={() => window.open(url, '_blank', 'noopener noreferrer')}
              >
                {icon}
                <span className="text-sm text-white font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}