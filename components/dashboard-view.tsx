'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Bell, Calendar, Clock, TrendingUp, Zap, Award } from 'lucide-react';

export function DashboardView() {
  const daysRemaining = 23;
  const totalDays = 30;
  const progressPercentage = ((totalDays - daysRemaining) / totalDays) * 100;

  return (
    <div className="space-y-6">
      {/* Retainer Status */}
      <Card className="vaporwave-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl" style={{ color: '#FF71CE' }}>
            <Zap className="w-6 h-6" />
            Retainer Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-[#FF71CE]/20 to-[#B967FF]/20 border-2 border-[#FF71CE]">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" style={{ color: '#01CDFE' }} />
                <p className="text-sm font-semibold" style={{ color: '#01CDFE' }}>Days Remaining</p>
              </div>
              <p className="text-4xl font-bold neon-text" style={{ color: '#FF71CE' }}>{daysRemaining}</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-[#01CDFE]/20 to-[#05FFA1]/20 border-2 border-[#01CDFE]">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5" style={{ color: '#05FFA1' }} />
                <p className="text-sm font-semibold" style={{ color: '#05FFA1' }}>Renewal Date</p>
              </div>
              <p className="text-xl font-bold neon-text" style={{ color: '#01CDFE' }}>Dec 15, 2024</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-[#05FFA1]/20 to-[#B967FF]/20 border-2 border-[#05FFA1]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" style={{ color: '#B967FF' }} />
                <p className="text-sm font-semibold" style={{ color: '#B967FF' }}>Payment Status</p>
              </div>
              <p className="text-xl font-bold neon-text" style={{ color: '#05FFA1' }}>ACTIVE</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span style={{ color: '#01CDFE' }}>Retainer Progress</span>
              <span style={{ color: '#FF71CE' }}>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-[#1a0033] border-2 border-[#FF71CE]" />
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#01CDFE' }}>Total Points</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>1,247</p>
              </div>
              <Award className="w-12 h-12" style={{ color: '#B967FF' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#05FFA1' }}>Active Requests</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#01CDFE' }}>5</p>
              </div>
              <Zap className="w-12 h-12" style={{ color: '#FF71CE' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#B967FF' }}>Community Posts</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#05FFA1' }}>23</p>
              </div>
              <TrendingUp className="w-12 h-12" style={{ color: '#01CDFE' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#FF71CE' }}>Badges Earned</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#B967FF' }}>7</p>
              </div>
              <Award className="w-12 h-12" style={{ color: '#05FFA1' }} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="vaporwave-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#01CDFE' }}>
              <Zap className="w-5 h-5" />
              Recent Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: 'Update Homepage Hero', status: 'In Progress', color: '#01CDFE' },
              { title: 'Fix Contact Form', status: 'Completed', color: '#05FFA1' },
              { title: 'Add New Blog Post', status: 'Pending', color: '#FF71CE' },
              { title: 'Optimize Images', status: 'In Progress', color: '#01CDFE' },
            ].map((request, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#1a0033]/50 to-[#2d0052]/50 border border-[#FF71CE]/30">
                <span className="font-semibold" style={{ color: '#B967FF' }}>{request.title}</span>
                <span className="status-badge" style={{ 
                  color: request.color,
                  borderColor: request.color,
                  backgroundColor: `${request.color}20`
                }}>
                  {request.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#05FFA1' }}>
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { message: 'Your request "Update Homepage" was completed', time: '2 hours ago', icon: '✓' },
              { message: 'New community post in Marketing & Growth', time: '5 hours ago', icon: '💬' },
              { message: 'Retainer renewal reminder: 23 days left', time: '1 day ago', icon: '⏰' },
              { message: 'You earned the "Active Member" badge!', time: '2 days ago', icon: '🏆' },
            ].map((notif, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[#1a0033]/50 to-[#2d0052]/50 border border-[#01CDFE]/30">
                <span className="text-2xl">{notif.icon}</span>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: '#01CDFE' }}>{notif.message}</p>
                  <p className="text-xs mt-1" style={{ color: '#B967FF' }}>{notif.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
