import React from 'react';
import Image from 'next/image';
import connectedScreensImg from '@/assets/Platform/Connected screens illustration.png';

export type PlatformFeatureId =
  | 'integrations'
  | 'content'
  | 'channels'
  | 'players'
  | 'scheduling';

export interface PlatformVisualProps {
  featureId: PlatformFeatureId;
}

export function PlatformVisual({ featureId }: PlatformVisualProps) {
  // Render matching visual based on active feature
  switch (featureId) {
    case 'integrations':
      return (
        <div key="integrations" className="pf-illustration-container">
          <Image
            src={connectedScreensImg}
            alt="Connected screens and integrations workflow"
            priority
            className="pf-illustration-img"
          />
        </div>
      );

    case 'content':
      return (
        <div key="content" className="pf-illustration-container">
          <svg
            viewBox="0 0 460 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pf-svg-illustration"
            aria-label="Content management library illustration"
          >
            {/* Background Content Frame */}
            <rect
              x="30"
              y="40"
              width="400"
              height="300"
              rx="16"
              fill="#FFFFFF"
              stroke="#E3E3E8"
              strokeWidth="1.5"
            />
            {/* Header / Search Strip */}
            <rect x="50" y="60" width="160" height="14" rx="7" fill="#F4F4F6" />
            <rect x="360" y="56" width="50" height="22" rx="6" fill="#FDF2F8" stroke="#FBCFE8" />
            <rect x="375" y="65" width="20" height="4" rx="2" fill="#D91C8A" />

            {/* Grid of Content Cards */}
            {/* Card 1 */}
            <rect x="50" y="96" width="105" height="95" rx="10" fill="#FAFAFB" stroke="#E3E3E8" />
            <rect x="65" y="112" width="75" height="42" rx="6" fill="#E4E4E7" />
            <rect x="65" y="164" width="55" height="6" rx="3" fill="#A1A1AA" />
            <circle cx="140" cy="167" r="4" fill="#D91C8A" />

            {/* Card 2 - Selected */}
            <rect x="177" y="96" width="105" height="95" rx="10" fill="#FFFFFF" stroke="#D91C8A" strokeWidth="1.5" />
            <rect x="192" y="112" width="75" height="42" rx="6" fill="#FDF2F8" />
            <circle cx="229" cy="133" r="12" fill="#D91C8A" fillOpacity="0.2" />
            <path d="M225 133L228 136L234 130" stroke="#D91C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="192" y="164" width="60" height="6" rx="3" fill="#171717" />

            {/* Card 3 */}
            <rect x="305" y="96" width="105" height="95" rx="10" fill="#FAFAFB" stroke="#E3E3E8" />
            <rect x="320" y="112" width="75" height="42" rx="6" fill="#E4E4E7" />
            <rect x="320" y="164" width="50" height="6" rx="3" fill="#A1A1AA" />

            {/* Card 4 */}
            <rect x="50" y="210" width="105" height="95" rx="10" fill="#FAFAFB" stroke="#E3E3E8" />
            <rect x="65" y="226" width="75" height="42" rx="6" fill="#E4E4E7" />
            <rect x="65" y="278" width="50" height="6" rx="3" fill="#A1A1AA" />

            {/* Card 5 */}
            <rect x="177" y="210" width="105" height="95" rx="10" fill="#FAFAFB" stroke="#E3E3E8" />
            <rect x="192" y="226" width="75" height="42" rx="6" fill="#E4E4E7" />
            <rect x="192" y="278" width="55" height="6" rx="3" fill="#A1A1AA" />

            {/* Card 6 */}
            <rect x="305" y="210" width="105" height="95" rx="10" fill="#FAFAFB" stroke="#E3E3E8" />
            <rect x="320" y="226" width="75" height="42" rx="6" fill="#E4E4E7" />
            <rect x="320" y="278" width="45" height="6" rx="3" fill="#A1A1AA" />
          </svg>
        </div>
      );

    case 'channels':
      return (
        <div key="channels" className="pf-illustration-container">
          <svg
            viewBox="0 0 460 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pf-svg-illustration"
            aria-label="Channel assembly and screen layout illustration"
          >
            {/* TV Display Frame */}
            <rect x="50" y="50" width="360" height="230" rx="14" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
            <rect x="60" y="60" width="340" height="210" rx="8" fill="#FAFAFB" />

            {/* Composed Screen Multi-Zones */}
            {/* Zone 1: Main Feed */}
            <rect x="72" y="72" width="210" height="130" rx="6" fill="#FFFFFF" stroke="#E3E3E8" />
            <rect x="84" y="84" width="80" height="8" rx="4" fill="#D91C8A" />
            <rect x="84" y="100" width="140" height="6" rx="3" fill="#E4E4E7" />
            <rect x="84" y="112" width="110" height="6" rx="3" fill="#E4E4E7" />
            <rect x="84" y="132" width="186" height="58" rx="4" fill="#FDF2F8" />

            {/* Zone 2: Right KPI Panel */}
            <rect x="292" y="72" width="96" height="130" rx="6" fill="#FFFFFF" stroke="#E3E3E8" />
            <circle cx="340" cy="105" r="18" fill="#F47A20" fillOpacity="0.15" />
            <circle cx="340" cy="105" r="10" fill="#F47A20" />
            <rect x="306" y="140" width="68" height="6" rx="3" fill="#171717" />
            <rect x="314" y="152" width="52" height="5" rx="2.5" fill="#A1A1AA" />

            {/* Zone 3: Bottom Ticker */}
            <rect x="72" y="212" width="316" height="46" rx="6" fill="#FFFFFF" stroke="#D91C8A" strokeWidth="1.5" />
            <rect x="84" y="230" width="120" height="8" rx="4" fill="#D91C8A" />
            <rect x="220" y="232" width="80" height="6" rx="3" fill="#A1A1AA" />
            <circle cx="370" cy="235" r="5" fill="#10B981" />

            {/* TV Stand Base */}
            <path d="M215 280L210 320H250L245 280" fill="#171717" />
            <rect x="180" y="320" width="100" height="8" rx="4" fill="#171717" />
          </svg>
        </div>
      );

    case 'players':
      return (
        <div key="players" className="pf-illustration-container">
          <svg
            viewBox="0 0 460 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pf-svg-illustration"
            aria-label="Player and multi-screen monitoring illustration"
          >
            {/* Central Monitor */}
            <rect x="130" y="50" width="200" height="130" rx="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <rect x="138" y="58" width="184" height="114" rx="6" fill="#FDF2F8" />
            <circle cx="230" cy="115" r="20" fill="#D91C8A" fillOpacity="0.15" />
            <path d="M224 115L228 119L237 110" stroke="#D91C8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Online Status Badge */}
            <rect x="190" y="145" width="80" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" />
            <circle cx="204" cy="155" r="4" fill="#10B981" />
            <rect x="214" y="152" width="46" height="5" rx="2.5" fill="#047857" />

            {/* Stand */}
            <path d="M224 180H236V210H224V180Z" fill="#71717A" />
            <rect x="200" y="210" width="60" height="6" rx="3" fill="#71717A" />

            {/* Left Connected Player Box */}
            <rect x="40" y="220" width="160" height="100" rx="10" fill="#FFFFFF" stroke="#E3E3E8" />
            <rect x="54" y="236" width="70" height="7" rx="3.5" fill="#171717" />
            <circle cx="178" cy="240" r="4" fill="#10B981" />
            <rect x="54" y="254" width="130" height="6" rx="3" fill="#E4E4E7" />
            <rect x="54" y="266" width="100" height="6" rx="3" fill="#E4E4E7" />
            <rect x="54" y="290" width="50" height="16" rx="4" fill="#F4F4F6" />

            {/* Right Connected Player Box */}
            <rect x="260" y="220" width="160" height="100" rx="10" fill="#FFFFFF" stroke="#E3E3E8" />
            <rect x="274" y="236" width="80" height="7" rx="3.5" fill="#171717" />
            <circle cx="398" cy="240" r="4" fill="#10B981" />
            <rect x="274" y="254" width="130" height="6" rx="3" fill="#E4E4E7" />
            <rect x="274" y="266" width="95" height="6" rx="3" fill="#E4E4E7" />
            <rect x="274" y="290" width="50" height="16" rx="4" fill="#F4F4F6" />

            {/* Connecting Lines */}
            <path d="M120 220V195H220" stroke="#D91C8A" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M340 220V195H240" stroke="#F47A20" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>
      );

    case 'scheduling':
      return (
        <div key="scheduling" className="pf-illustration-container">
          <svg
            viewBox="0 0 460 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pf-svg-illustration"
            aria-label="Scheduling timeline and calendar illustration"
          >
            {/* Calendar / Timeline Card */}
            <rect x="40" y="50" width="380" height="280" rx="16" fill="#FFFFFF" stroke="#E3E3E8" strokeWidth="1.5" />

            {/* Days Header */}
            <rect x="60" y="76" width="40" height="6" rx="3" fill="#A1A1AA" />
            <rect x="112" y="76" width="40" height="6" rx="3" fill="#A1A1AA" />
            <rect x="164" y="76" width="40" height="6" rx="3" fill="#A1A1AA" />
            <rect x="216" y="76" width="40" height="6" rx="3" fill="#D91C8A" />
            <rect x="268" y="76" width="40" height="6" rx="3" fill="#A1A1AA" />
            <rect x="320" y="76" width="40" height="6" rx="3" fill="#A1A1AA" />
            <rect x="372" y="76" width="30" height="6" rx="3" fill="#A1A1AA" />

            {/* Divider */}
            <line x1="40" y1="98" x2="420" y2="98" stroke="#F4F4F6" strokeWidth="1.5" />

            {/* Timeline Rows */}
            {/* Time Slot 1 - Active schedule block in Magenta */}
            <rect x="60" y="118" width="50" height="8" rx="4" fill="#E4E4E7" />
            <rect x="120" y="112" width="180" height="34" rx="8" fill="#FDF2F8" stroke="#FBCFE8" />
            <circle cx="136" cy="129" r="5" fill="#D91C8A" />
            <rect x="150" y="126" width="90" height="6" rx="3" fill="#D91C8A" />
            <rect x="250" y="126" width="35" height="6" rx="3" fill="#F47A20" />

            {/* Time Slot 2 */}
            <rect x="60" y="172" width="50" height="8" rx="4" fill="#E4E4E7" />
            <rect x="200" y="166" width="160" height="34" rx="8" fill="#FAFAFB" stroke="#E3E3E8" />
            <circle cx="216" cy="183" r="5" fill="#71717A" />
            <rect x="230" y="180" width="80" height="6" rx="3" fill="#52525B" />

            {/* Time Slot 3 */}
            <rect x="60" y="226" width="50" height="8" rx="4" fill="#E4E4E7" />
            <rect x="140" y="220" width="220" height="34" rx="8" fill="#FDF2F8" stroke="#D91C8A" strokeWidth="1.5" />
            <circle cx="156" cy="237" r="5" fill="#D91C8A" />
            <rect x="170" y="234" width="110" height="6" rx="3" fill="#171717" />
            <rect x="300" y="234" width="45" height="6" rx="3" fill="#10B981" />

            {/* Time Slot 4 */}
            <rect x="60" y="280" width="50" height="8" rx="4" fill="#E4E4E7" />
            <rect x="120" y="274" width="140" height="34" rx="8" fill="#FAFAFB" stroke="#E3E3E8" />
            <circle cx="136" cy="291" r="5" fill="#71717A" />
            <rect x="150" y="288" width="70" height="6" rx="3" fill="#52525B" />
          </svg>
        </div>
      );
  }
}
