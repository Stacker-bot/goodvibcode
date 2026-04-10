'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, ThumbsUp, MessageCircle, Pin, TrendingUp } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  isPinned: boolean;
  date: string;
}

export function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'SJ',
      title: 'Best practices for SEO in 2024',
      content: 'Just wanted to share some amazing SEO strategies that have been working great for my business. Focus on E-E-A-T, quality content, and user experience!',
      category: 'Marketing & Growth',
      likes: 24,
      comments: 8,
      isPinned: true,
      date: '2024-11-21'
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'MC',
      title: 'Celebrating 10K monthly visitors! 🎉',
      content: 'Thanks to the amazing support from this community and the team, we just hit 10,000 monthly visitors! Here\'s what worked for us...',
      category: 'Wins',
      likes: 45,
      comments: 12,
      isPinned: false,
      date: '2024-11-20'
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'ER',
      title: 'Question about mobile optimization',
      content: 'Has anyone dealt with mobile page speed issues? My site loads fast on desktop but slow on mobile. Any tips?',
      category: 'Questions',
      likes: 15,
      comments: 6,
      isPinned: false,
      date: '2024-11-20'
    },
    {
      id: 4,
      author: 'David Park',
      avatar: 'DP',
      title: 'New feature announcement: Dark mode!',
      content: 'Excited to announce that we\'ve just launched dark mode on our website. Check it out and let us know what you think!',
      category: 'Announcements',
      likes: 38,
      comments: 15,
      isPinned: true,
      date: '2024-11-19'
    },
    {
      id: 5,
      author: 'Lisa Thompson',
      avatar: 'LT',
      title: 'My favorite tools for content creation',
      content: 'Here are the top 5 tools I use daily for creating engaging content: Canva, Grammarly, Hemingway Editor, Unsplash, and...',
      category: 'Tools & Resources',
      likes: 31,
      comments: 9,
      isPinned: false,
      date: '2024-11-19'
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'General Discussion'
  });

  const categories = [
    'General Discussion',
    'Marketing & Growth',
    'Website Tips',
    'Wins',
    'Questions',
    'Announcements',
    'Tools & Resources'
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'General Discussion': '#B967FF',
      'Marketing & Growth': '#FF71CE',
      'Website Tips': '#01CDFE',
      'Wins': '#05FFA1',
      'Questions': '#B967FF',
      'Announcements': '#FF71CE',
      'Tools & Resources': '#01CDFE'
    };
    return colors[category] || '#B967FF';
  };

  const handleSubmit = () => {
    if (newPost.title && newPost.content) {
      const post: Post = {
        id: posts.length + 1,
        author: 'John Doe',
        avatar: 'JD',
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        likes: 0,
        comments: 0,
        isPinned: false,
        date: new Date().toISOString().split('T')[0]
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', category: 'General Discussion' });
      setIsDialogOpen(false);
    }
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>
          Community Feed
        </h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="retro-button">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="vaporwave-card border-0 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl neon-text" style={{ color: '#01CDFE' }}>
                Create Community Post
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#FF71CE' }}>
                  Post Title
                </label>
                <Input
                  placeholder="Enter post title..."
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="bg-[#1a0033]/50 border-2 border-[#01CDFE] text-white"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#05FFA1' }}>
                  Content
                </label>
                <Textarea
                  placeholder="Share your thoughts with the community..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="bg-[#1a0033]/50 border-2 border-[#05FFA1] text-white min-h-[120px]"
                />
              </div>
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: '#B967FF' }}>
                  Category
                </label>
                <Select value={newPost.category} onValueChange={(value) => setNewPost({ ...newPost, category: value })}>
                  <SelectTrigger className="bg-[#1a0033]/50 border-2 border-[#B967FF] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a0033] border-2 border-[#B967FF]">
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="retro-button w-full" onClick={handleSubmit}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Publish Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="vaporwave-card border-0 hover:scale-[1.01] transition-transform">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF71CE] to-[#B967FF] flex items-center justify-center text-white font-bold flex-shrink-0">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold" style={{ color: '#01CDFE' }}>{post.author}</span>
                    <span className="text-xs" style={{ color: '#B967FF' }}>• {post.date}</span>
                    {post.isPinned && (
                      <Pin className="w-4 h-4" style={{ color: '#FF71CE' }} />
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2 neon-text" style={{ color: '#05FFA1' }}>
                    {post.title}
                  </CardTitle>
                  <span 
                    className="status-badge text-xs"
                    style={{ 
                      color: getCategoryColor(post.category),
                      borderColor: getCategoryColor(post.category),
                      backgroundColor: `${getCategoryColor(post.category)}20`
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4" style={{ color: '#B967FF' }}>
                {post.content}
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[#FF71CE] hover:text-[#01CDFE]"
                  onClick={() => handleLike(post.id)}
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-[#01CDFE] hover:text-[#05FFA1]">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {post.comments}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
