'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Users, MessageSquare, TrendingUp, Settings, Bell } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>
        Admin Dashboard
      </h2>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#01CDFE' }}>Total Clients</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>47</p>
              </div>
              <Users className="w-12 h-12" style={{ color: '#B967FF' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#05FFA1' }}>Active Requests</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#01CDFE' }}>23</p>
              </div>
              <MessageSquare className="w-12 h-12" style={{ color: '#FF71CE' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#B967FF' }}>Community Posts</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#05FFA1' }}>156</p>
              </div>
              <TrendingUp className="w-12 h-12" style={{ color: '#01CDFE' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: '#FF71CE' }}>Renewals This Month</p>
                <p className="text-3xl font-bold neon-text" style={{ color: '#B967FF' }}>12</p>
              </div>
              <BarChart className="w-12 h-12" style={{ color: '#05FFA1' }} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="vaporwave-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: '#01CDFE' }}>
            <Settings className="w-5 h-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="retro-button h-auto py-6 flex-col gap-2">
              <Users className="w-6 h-6" />
              <span>Manage Clients</span>
            </Button>
            <Button className="retro-button h-auto py-6 flex-col gap-2">
              <MessageSquare className="w-6 h-6" />
              <span>View Requests</span>
            </Button>
            <Button className="retro-button h-auto py-6 flex-col gap-2">
              <Bell className="w-6 h-6" />
              <span>Send Announcement</span>
            </Button>
            <Button className="retro-button h-auto py-6 flex-col gap-2">
              <BarChart className="w-6 h-6" />
              <span>View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="vaporwave-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#05FFA1' }}>
              <MessageSquare className="w-5 h-5" />
              Recent Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { client: 'Sarah Johnson', request: 'Update Homepage Hero', status: 'In Progress' },
              { client: 'Mike Chen', request: 'Fix Contact Form', status: 'Pending' },
              { client: 'Emily Rodriguez', request: 'Add Blog Post', status: 'Completed' },
              { client: 'David Park', request: 'Optimize Images', status: 'In Progress' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#1a0033]/50 to-[#2d0052]/50 border border-[#FF71CE]/30">
                <div>
                  <p className="font-semibold" style={{ color: '#01CDFE' }}>{item.client}</p>
                  <p className="text-sm" style={{ color: '#B967FF' }}>{item.request}</p>
                </div>
                <span className="status-badge text-xs" style={{ 
                  color: '#05FFA1',
                  borderColor: '#05FFA1',
                  backgroundColor: '#05FFA120'
                }}>
                  {item.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="vaporwave-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B967FF' }}>
              <TrendingUp className="w-5 h-5" />
              Engagement Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { metric: 'Community Posts', value: '156', change: '+12%' },
              { metric: 'Active Users', value: '42', change: '+8%' },
              { metric: 'Avg Response Time', value: '2.3h', change: '-15%' },
              { metric: 'Client Satisfaction', value: '98%', change: '+3%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#1a0033]/50 to-[#2d0052]/50 border border-[#01CDFE]/30">
                <span className="font-semibold" style={{ color: '#FF71CE' }}>{item.metric}</span>
                <div className="text-right">
                  <p className="font-bold neon-text" style={{ color: '#01CDFE' }}>{item.value}</p>
                  <p className="text-xs" style={{ color: '#05FFA1' }}>{item.change}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
