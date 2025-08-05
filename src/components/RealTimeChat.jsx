import React, { useState, useEffect, useRef } from 'react';
import socketService from '../utils/socket';
import apiService from '../utils/api';
import { useAuth } from '../utils/AuthContext';
import ChatStatusIndicator from './ChatStatusIndicator';

const RealTimeChat = ({ receiverId, receiverName, receiverRole }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { user } = useAuth();

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load existing messages
  useEffect(() => {
    if (receiverId) {
      loadMessages();
    }
  }, [receiverId]);

  // Set up real-time message listeners
  useEffect(() => {
    // Listen for new messages
    socketService.onNewMessage((message) => {
      if (message.senderId === receiverId || message.receiverId === receiverId) {
        setMessages(prev => [...prev, message]);
      }
    });

    return () => {
      socketService.off('new-message');
    };
  }, [receiverId]);

  const loadMessages = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.request(`/chat/conversation/${receiverId}`);
      setMessages(response || []);
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;

    const messageData = {
      receiverId,
      content: newMessage.trim(),
      type: 'text'
    };

    try {
      // Send via API
      const response = await apiService.request('/chat/message', {
        method: 'POST',
        body: JSON.stringify(messageData)
      });

      // Add message to local state
      setMessages(prev => [...prev, response.data]);
      setNewMessage('');

      // Send via Socket.IO for real-time delivery
      socketService.sendMessage({
        ...messageData,
        receiverRole,
        receiverId
      });

    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!receiverId) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <p>Select a conversation to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b bg-gray-50 rounded-t-lg">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          {receiverName?.charAt(0)?.toUpperCase()}
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-900">{receiverName}</h3>
          <p className="text-sm text-gray-500 capitalize">{receiverRole}</p>
        </div>
        <div className="ml-auto">
          <ChatStatusIndicator />
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={message.id || index}
              className={`flex ${message.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.senderId === user?.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.senderId === user?.id ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form onSubmit={sendMessage} className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={!socketService.getConnectionStatus()}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || !socketService.getConnectionStatus()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        {!socketService.getConnectionStatus() && (
          <p className="text-xs text-red-500 mt-1">
            Connection lost. Trying to reconnect...
          </p>
        )}
      </form>
    </div>
  );
};

export default RealTimeChat; 