/**
 * Domain Type Definitions for Digital Signage Platform
 * (Foundation skeletons for future implementation)
 */

import { Status } from './common';

export interface ScreenDevice {
  id: string;
  name: string;
  location?: string;
  orientation: 'landscape' | 'portrait';
  resolution: string;
  status: Status;
  currentChannelId?: string;
  lastPingAt?: string;
}

export interface PlayerHardware {
  id: string;
  pairedCode: string;
  screenId?: string;
  model: string;
  osVersion: string;
  status: Status;
  ipAddress?: string;
}

export interface Channel {
  id: string;
  name: string;
  description?: string;
  playlistIds: string[];
  activeScheduleId?: string;
}

export interface Playlist {
  id: string;
  name: string;
  durationSeconds: number;
  itemCount: number;
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'image' | 'video' | 'url' | 'app' | 'canva' | 'powerbi';
  url: string;
  durationSeconds: number;
}

export interface Schedule {
  id: string;
  name: string;
  channelId: string;
  startDate: string;
  endDate?: string;
  timeSlots: {
    startTime: string;
    endTime: string;
    daysOfWeek: number[];
  }[];
}
