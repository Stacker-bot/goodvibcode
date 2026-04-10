'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Paperclip, Send, MessageCircle, AlertCircle } from 'lucide-react';

interface Request {
  id: number;
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Needs Info';
  priority: 'Low' | 'Medium' | 'High';
  date: string;
  replies: number;
}

export function RequestsFeed() {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      title: 'Update Homepage Hero Section',
      description: 'Need to update the hero section with new copy and images for the holiday season.',
      status: 'In Progress',
      priority: 'High',
      date: '2024-11-20',
      replies: 3
    },
    {
      id: 2,
      title: 'Fix Contact Form Validation',
      description: 'Contact form is not validating email addresses properly.',
      status: 'Completed',
      priority: 'Medium',
      date: '2024-11-19',
      replies: 5
    },
    {
      id: 3,
      title: 'Add New Blog Post',
      description: 'Please add the new blog post about our latest product launch.',
      status: 'Pending',
      priority: 'Low',
      date: '2024-11-21',
      replies: 0
    },
    {
      id: 4,
      title: 'Optimize Page Load Speed',
      description: 'Homepage is loading slowly. Need to optimize images and scripts.',
      status: 'In Progress',
      priority: 'High',
      date: '2024-11-18',
      replies: 7
    },
    {
      id: 5,
      title: 'Update Privacy Policy',
      description: 'Need to update privacy policy to comply with new regulations.',
      status: 'Needs Info',
      priority: 'Medium',
      date: '2024-11-17',
      replies: 2
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    priority: 'Medium' as 'Low' | 'Medium' | 'High'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return '#FF71CE';
      case 'In Progress': return '#01CDFE';
      case 'Completed': return '#05FFA1';
      case 'Needs Info': return '#B967FF';
      default: return '#FF71CE';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low': return '#05FFA1';
      case 'Medium': return '#01CDFE';
      case 'High': return '#FF71CE';
      default: return '#01CDFE';
    }
  };

  const handleSubmit = () => {
    if (newRequest.title && newRequest.description) {
      const request: Request = {
        id: requests.length + 1,
        title: newRequest.title,
        description: newRequest.description,
        status: 'Pending',
        priority: newRequest.priority,
        date: new Date().toISOString().split('T')[0],
        replies: 0
      };
      setRequests([request, ...requests]);
      setNewRequest({ title: '', description: '', priority: 'Medium' });
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>
          Service Requests
        </h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="retro-button">
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="vaporwave-card border-0 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl neon-text" style={{ color: '#01CDFE' }}>
                Create New Request
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#FF71CE' }}>
                  Request Title
                </label>
                <Input
                  placeholder="Enter request title..."
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                  className="bg-[#1a0033]/50 border-2 border-[#01CDFE] text-white"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#05FFA1' }}>
                  Description
                </label>
                <Textarea
                  placeholder="Describe your request in detail..."
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  className="bg-[#1a0033]/50 border-2 border-[#05FFA1] text-white min-h-[120px]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#B967FF' }}>
                  Priority
                </label>
                <Select value={newRequest.priority} onValueChange={(value: any) => setNewRequest({ ...newRequest, priority: value })}>
                  <SelectTrigger className="bg-[#1a0033]/50 border-2 border-[#B967FF] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a0033] border-2 border-[#B967FF]">
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button className="retro-button flex-1" onClick={handleSubmit}>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request
                </Button>
                <Button variant="outline" className="border-2 border-[#FF71CE]">
                  <Paperclip className="w-4 h-4 mr-2" />
                  Attach File
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {requests.map((request) => (
          <Card key={request.id} className="vaporwave-card border-0 hover:scale-[1.02] transition-transform cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 neon-text" style={{ color: '#01CDFE' }}>
                    {request.title}
                  </CardTitle>
                  <p className="text-sm" style={{ color: '#B967FF' }}>
                    {request.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span 
                    className="status-badge"
                    style={{ 
                      color: getStatusColor(request.status),
                      borderColor: getStatusColor(request.status),
                      backgroundColor: `${getStatusColor(request.status)}20`
                    }}
                  >
                    {request.status}
                  </span>
                  <span 
                    className="status-badge"
                    style={{ 
                      color: getPriorityColor(request.priority),
                      borderColor: getPriorityColor(request.priority),
                      backgroundColor: `${getPriorityColor(request.priority)}20`
                    }}
                  >
                    {request.priority}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span style={{ color: '#05FFA1' }}>📅 {request.date}</span>
                  <span className="flex items-center gap-1" style={{ color: '#FF71CE' }}>
                    <MessageCircle className="w-4 h-4" />
                    {request.replies} replies
                  </span>
                </div>
                <Button variant="ghost" className="text-[#01CDFE] hover:text-[#05FFA1]">
                  View Details →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
