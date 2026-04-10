'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Star, TrendingUp, Zap, Crown } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  badges: string[];
  trend: 'up' | 'down' | 'same';
}

export function LeaderboardView() {
  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Sarah Johnson', avatar: 'SJ', points: 2847, badges: ['Top Contributor', 'VIP Client', 'Community Leader'], trend: 'up' },
    { rank: 2, name: 'Mike Chen', avatar: 'MC', points: 2156, badges: ['Fast Responder', 'Active Member', 'Helpful Member'], trend: 'up' },
    { rank: 3, name: 'Emily Rodriguez', avatar: 'ER', points: 1923, badges: ['VIP Client', 'On-Time Payer', 'Active Member'], trend: 'same' },
    { rank: 4, name: 'David Park', avatar: 'DP', points: 1687, badges: ['Community Leader', 'Helpful Member'], trend: 'down' },
    { rank: 5, name: 'Lisa Thompson', avatar: 'LT', points: 1542, badges: ['Top Contributor', 'Active Member'], trend: 'up' },
    { rank: 6, name: 'John Doe', avatar: 'JD', points: 1247, badges: ['VIP Client', 'On-Time Payer'], trend: 'up' },
    { rank: 7, name: 'Alex Martinez', avatar: 'AM', points: 1089, badges: ['Fast Responder', 'Helpful Member'], trend: 'same' },
    { rank: 8, name: 'Rachel Kim', avatar: 'RK', points: 956, badges: ['Active Member'], trend: 'up' },
  ];

  const badges = [
    { name: 'Top Contributor', icon: '🏆', description: 'Most community posts', color: '#FF71CE' },
    { name: 'Fast Responder', icon: '⚡', description: 'Quick to help others', color: '#01CDFE' },
    { name: 'VIP Client', icon: '👑', description: '3+ renewals', color: '#05FFA1' },
    { name: 'On-Time Payer', icon: '💎', description: 'Always pays on time', color: '#B967FF' },
    { name: 'Community Leader', icon: '🌟', description: 'Highly engaged member', color: '#FF71CE' },
    { name: 'Helpful Member', icon: '🤝', description: 'Most helpful answers', color: '#01CDFE' },
    { name: 'Active Member', icon: '🔥', description: 'Regular participation', color: '#05FFA1' },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return '#FFD700';
    if (rank === 2) return '#C0C0C0';
    if (rank === 3) return '#CD7F32';
    return '#B967FF';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6" />;
    if (rank === 2) return <Trophy className="w-5 h-5" />;
    if (rank === 3) return <Award className="w-5 h-5" />;
    return <Star className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold neon-text" style={{ color: '#FF71CE' }}>
        Leaderboard & Achievements
      </h2>

      {/* Points System Info */}
      <Card className="vaporwave-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: '#01CDFE' }}>
            <Zap className="w-5 h-5" />
            How to Earn Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { action: 'Post Request', points: '+5', icon: '📝' },
              { action: 'Community Post', points: '+10', icon: '💬' },
              { action: 'Comment', points: '+3', icon: '💭' },
              { action: 'Get Likes', points: '+2', icon: '👍' },
              { action: 'Helpful Answer', points: '+15', icon: '✨' },
              { action: 'Renew On Time', points: '+50', icon: '⏰' },
              { action: 'Refer Client', points: '+100', icon: '🎁' },
              { action: 'Complete Profile', points: '+25', icon: '👤' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-gradient-to-br from-[#1a0033]/50 to-[#2d0052]/50 border border-[#FF71CE]/30 text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs mb-1" style={{ color: '#B967FF' }}>{item.action}</div>
                <div className="font-bold neon-text" style={{ color: '#05FFA1' }}>{item.points}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card className="vaporwave-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: '#05FFA1' }}>
            <Trophy className="w-5 h-5" />
            Top Contributors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div 
                key={entry.rank}
                className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-[#1a0033]/50 to-[#2d0052]/50 border-2 ${
                  entry.rank <= 3 ? 'border-[#FF71CE]' : 'border-[#B967FF]/30'
                } hover:scale-[1.02] transition-transform`}
              >
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-full font-bold"
                  style={{ 
                    backgroundColor: `${getRankColor(entry.rank)}20`,
                    color: getRankColor(entry.rank),
                    border: `2px solid ${getRankColor(entry.rank)}`
                  }}
                >
                  {getRankIcon(entry.rank)}
                </div>
                
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF71CE] to-[#B967FF] flex items-center justify-center text-white font-bold">
                  {entry.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold" style={{ color: '#01CDFE' }}>{entry.name}</span>
                    {entry.trend === 'up' && <TrendingUp className="w-4 h-4" style={{ color: '#05FFA1' }} />}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {entry.badges.map((badge, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: '#B967FF20',
                          color: '#B967FF',
                          border: '1px solid #B967FF'
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold neon-text" style={{ color: '#FF71CE' }}>
                    {entry.points.toLocaleString()}
                  </div>
                  <div className="text-xs" style={{ color: '#05FFA1' }}>points</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card className="vaporwave-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: '#B967FF' }}>
            <Award className="w-5 h-5" />
            Available Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((badge, i) => (
              <div 
                key={i}
                className="p-4 rounded-lg bg-gradient-to-br from-[#1a0033]/50 to-[#2d0052]/50 border-2"
                style={{ borderColor: badge.color }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{badge.icon}</span>
                  <div>
                    <div className="font-semibold neon-text" style={{ color: badge.color }}>
                      {badge.name}
                    </div>
                    <div className="text-xs" style={{ color: '#B967FF' }}>
                      {badge.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
