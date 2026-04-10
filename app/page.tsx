'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardView } from '@/components/dashboard-view';
import { RequestsFeed } from '@/components/requests-feed';
import { CommunityFeed } from '@/components/community-feed';
import { LeaderboardView } from '@/components/leaderboard-view';
import { AdminDashboard } from '@/components/admin-dashboard';
import { Zap, MessageSquare, Users, Trophy, Settings } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAdmin] = useState(true); // Toggle for demo purposes

  return (
    <div className="min-h-screen relative z-10">
      <header className="border-b-2 border-[#FF71CE] bg-gradient-to-r from-[#1a0033]/90 to-[#2d0052]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold neon-text glitch" style={{ color: '#FF71CE' }}>
              ⚡ CLIENT PORTAL ⚡
            </h1>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg vaporwave-card">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF71CE] to-[#B967FF] flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: '#01CDFE' }}>John Doe</p>
                  <p className="text-xs" style={{ color: '#05FFA1' }}>VIP Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 gap-2 bg-transparent mb-8">
            <TabsTrigger 
              value="dashboard" 
              className="retro-button data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF71CE] data-[state=active]:to-[#B967FF]"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="requests" 
              className="retro-button data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#01CDFE] data-[state=active]:to-[#05FFA1]"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Requests</span>
            </TabsTrigger>
            <TabsTrigger 
              value="community" 
              className="retro-button data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#B967FF] data-[state=active]:to-[#FF71CE]"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
            <TabsTrigger 
              value="leaderboard" 
              className="retro-button data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#05FFA1] data-[state=active]:to-[#01CDFE]"
            >
              <Trophy className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Leaderboard</span>
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger 
                value="admin" 
                className="retro-button data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FF71CE] data-[state=active]:to-[#01CDFE]"
              >
                <Settings className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Admin</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="dashboard" className="mt-0">
            <DashboardView />
          </TabsContent>

          <TabsContent value="requests" className="mt-0">
            <RequestsFeed />
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            <CommunityFeed />
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-0">
            <LeaderboardView />
          </TabsContent>

          {isAdmin && (
            <TabsContent value="admin" className="mt-0">
              <AdminDashboard />
            </TabsContent>
          )}
        </Tabs>
      </main>

      <footer className="border-t-2 border-[#01CDFE] bg-gradient-to-r from-[#1a0033]/90 to-[#2d0052]/90 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm neon-text" style={{ color: '#05FFA1' }}>
            ⚡ Powered by Vaporwave Dreams ⚡
          </p>
        </div>
      </footer>
    </div>
  );
}
