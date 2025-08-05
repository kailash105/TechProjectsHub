import React from 'react';
import { Wifi, WifiOff, Circle } from 'lucide-react';
import socketService from '../utils/socket';

const ChatStatusIndicator = ({ isTyping = false, typingUser = null }) => {
  const isConnected = socketService.getConnectionStatus();

  return (
    <div className="flex items-center gap-2 text-sm">
      {/* Connection Status */}
      <div className="flex items-center gap-1">
        {isConnected ? (
          <>
            <Wifi className="w-3 h-3 text-green-500" />
            <span className="text-green-600">Connected</span>
          </>
        ) : (
          <>
            <WifiOff className="w-3 h-3 text-red-500" />
            <span className="text-red-600">Disconnected</span>
          </>
        )}
      </div>

      {/* Typing Indicator */}
      {isTyping && typingUser && (
        <div className="flex items-center gap-1 text-blue-600">
          <div className="flex gap-1">
            <Circle className="w-2 h-2 animate-pulse" />
            <Circle className="w-2 h-2 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Circle className="w-2 h-2 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <span>{typingUser} is typing...</span>
        </div>
      )}
    </div>
  );
};

export default ChatStatusIndicator; 