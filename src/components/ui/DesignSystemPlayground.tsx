'use client';

import React from 'react';
import {
  Typography,
  Button,
  IconButton,
  Card,
  Badge,
  Input,
  Textarea,
  Select,
  Container,
  Divider,
  Avatar,
  Icon,
} from '@/components/ui';
import { BRAND_CONFIG } from '@/lib/constants';

export function DesignSystemPlayground() {
  return (
    <div className="w-full bg-[#FAFAFB] text-[#171717] pb-24">
      {/* Header Landmark */}
      <header className="bg-white border-b border-[#E3E3E8] sticky top-0 z-50 shadow-xs">
        <Container size="xl" className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-[#D91C8A] flex items-center justify-center text-white font-bold text-lg shadow-xs">
              R
            </div>
            <div>
              <Typography variant="heading-sm" weight="bold" as="h1">
                {BRAND_CONFIG.name} Design System
              </Typography>
              <Typography variant="caption" color="secondary">
                Design System Foundation & Reusable Component Library
              </Typography>
            </div>
          </div>
          <Badge variant="primary" dot size="md">
            Tokens Verified
          </Badge>
        </Container>
      </header>

      {/* Main Content Sections */}
      <Container size="xl" className="pt-10 space-y-12">
        {/* 1. COLOR TOKENS */}
        <Card variant="default" className="bg-white">
          <Card.Header>
            <Card.Title>1. Centralized Color Tokens</Card.Title>
            <Card.Description>
              Figma-aligned semantic tokens for consistent brand aesthetics and future theming.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#D91C8A] shadow-xs" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Primary</p>
                  <p className="text-xs text-[#666673]">#D91C8A</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#C3197C] shadow-xs" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Primary Hover</p>
                  <p className="text-xs text-[#666673]">#C3197C</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#FDF2F8] border border-[#FBCFE8]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Primary Subtle</p>
                  <p className="text-xs text-[#666673]">#FDF2F8</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#FAFAFB] border border-[#E3E3E8]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Canvas</p>
                  <p className="text-xs text-[#666673]">#FAFAFB</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#171717]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Text Primary</p>
                  <p className="text-xs text-[#666673]">#171717</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#666673]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Text Secondary</p>
                  <p className="text-xs text-[#666673]">#666673</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#E3E3E8]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Border Default</p>
                  <p className="text-xs text-[#666673]">#E3E3E8</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#10B981]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Success</p>
                  <p className="text-xs text-[#666673]">#10B981</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#F59E0B]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Warning</p>
                  <p className="text-xs text-[#666673]">#F59E0B</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#EF4444]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Error</p>
                  <p className="text-xs text-[#666673]">#EF4444</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#3B82F6]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Info</p>
                  <p className="text-xs text-[#666673]">#3B82F6</p>
                </div>
              </div>

              <div className="border border-[#E3E3E8] rounded-lg p-3 bg-white space-y-2">
                <div className="h-14 rounded-md bg-[#F47A20]" />
                <div>
                  <p className="text-xs font-semibold text-[#171717]">Accent Orange</p>
                  <p className="text-xs text-[#666673]">#F47A20</p>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 2. TYPOGRAPHY SYSTEM */}
        <Card variant="default" className="bg-white">
          <Card.Header>
            <Card.Title>2. Typography System (Inter)</Card.Title>
            <Card.Description>
              Semantic typography scale with strict weight, line-height, and responsive sizing.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-6">
            <div className="space-y-2 border-b border-[#F4F4F5] pb-4">
              <Typography variant="caption" color="muted">
                DISPLAY XL (72px)
              </Typography>
              <Typography variant="display-xl" weight="bold">
                Enterprise Digital Signage
              </Typography>
            </div>

            <div className="space-y-2 border-b border-[#F4F4F5] pb-4">
              <Typography variant="caption" color="muted">
                HEADING XL (36px)
              </Typography>
              <Typography variant="heading-xl">
                Orchestrate 1,000+ Hardware Displays Effortlessly
              </Typography>
            </div>

            <div className="space-y-2 border-b border-[#F4F4F5] pb-4">
              <Typography variant="caption" color="muted">
                HEADING LG (30px)
              </Typography>
              <Typography variant="heading-lg">
                Intelligent Playlist Scheduling & Live Telemetry
              </Typography>
            </div>

            <div className="space-y-2 border-b border-[#F4F4F5] pb-4">
              <Typography variant="caption" color="muted">
                BODY LG (18px)
              </Typography>
              <Typography variant="body-lg" color="secondary">
                Connect media players in seconds with 6-digit activation codes. Broadcast full-fidelity 4K video, dynamic dashboards, and social tickers.
              </Typography>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <Typography variant="caption" color="muted" className="block mb-1">
                  LABEL LG
                </Typography>
                <Typography variant="label-lg">Device Status: Ready</Typography>
              </div>
              <div>
                <Typography variant="caption" color="muted" className="block mb-1">
                  LABEL MD
                </Typography>
                <Typography variant="label-md">Last Ping: 12s ago</Typography>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 3. BUTTON SYSTEM */}
        <Card variant="default" className="bg-white">
          <Card.Header>
            <Card.Title>3. Button & Action Foundation</Card.Title>
            <Card.Description>
              Figma-specified buttons with hover states, focus rings, sizes, loading spinners, and disabled states.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-6">
            <div>
              <Typography variant="label-md" color="muted" className="mb-3 block">
                BUTTON VARIANTS
              </Typography>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
                <Button variant="link">Link Style</Button>
              </div>
            </div>

            <div>
              <Typography variant="label-md" color="muted" className="mb-3 block">
                STATES & ICONS
              </Typography>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" leftIcon={<Icon name="Tv" size={16} />}>
                  Connect Screen
                </Button>
                <Button variant="secondary" rightIcon={<Icon name="ArrowRight" size={16} />}>
                  Explore Features
                </Button>
                <Button variant="primary" loading>
                  Connecting...
                </Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            <div>
              <Typography variant="label-md" color="muted" className="mb-3 block">
                ICON BUTTONS
              </Typography>
              <div className="flex flex-wrap gap-3 items-center">
                <IconButton
                  aria-label="Refresh player status"
                  icon={<Icon name="RefreshCw" size={16} />}
                  variant="secondary"
                  size="sm"
                />
                <IconButton
                  aria-label="Add new playlist"
                  icon={<Icon name="Plus" size={18} />}
                  variant="primary"
                  size="md"
                />
                <IconButton
                  aria-label="Settings configuration"
                  icon={<Icon name="Settings" size={20} />}
                  variant="outline"
                  size="lg"
                />
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 4. FORM CONTROLS */}
        <Card variant="default" className="bg-white">
          <Card.Header>
            <Card.Title>4. Form Controls Foundation</Card.Title>
            <Card.Description>
              Inputs, Textareas, and Select controls sharing radius, borders, and focus rings.
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Screen Name"
                placeholder="e.g. Main Lobby 4K Display"
                helperText="A clear identifier for your physical display."
                required
              />

              <Input
                label="Search Media Library"
                placeholder="Filter playlists, videos, graphics..."
                leadingIcon={<Icon name="Search" size={18} />}
              />

              <Select
                label="Display Orientation"
                options={[
                  { value: 'landscape', label: 'Landscape Mode (16:9)' },
                  { value: 'portrait', label: 'Portrait Mode (9:16)' },
                ]}
              />

              <Textarea
                label="Channel Description"
                placeholder="Notes for content managers..."
                rows={3}
              />
            </div>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
}
