import { io } from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.isConnected = false;
  }

  // Initialize socket connection
  connect(userData) {
    if (this.socket) {
      this.disconnect();
    }

    const socketUrl = import.meta.env.VITE_SOCKET_URL || 'http://localhost:8000';
    this.socket = io(socketUrl, {
      auth: {
        token: localStorage.getItem('lmsToken')
      }
    });

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      this.isConnected = true;
      
      // Join user's room
      if (userData && userData._id) {
        this.socket.emit('join-room', {
          id: userData._id,
          role: userData.role
        });
        console.log(`Joined room: ${userData.role}-${userData._id}`);
      }
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
      this.isConnected = false;
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      this.isConnected = false;
    });

    return this.socket;
  }

  // Disconnect socket
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
    }
  }

  // Send chat message
  sendMessage(messageData) {
    if (this.socket && this.isConnected) {
      this.socket.emit('send-message', messageData);
    }
  }

  // Listen for new messages
  onNewMessage(callback) {
    if (this.socket) {
      this.socket.on('new-message', callback);
    }
  }

  // Listen for new notifications
  onNewNotification(callback) {
    if (this.socket) {
      this.socket.on('new-notification', callback);
    }
  }

  // Listen for course updates
  onCourseUpdate(callback) {
    if (this.socket) {
      this.socket.on('course-changed', callback);
    }
  }

  // Remove event listeners
  off(event, callback) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  // Get connection status
  getConnectionStatus() {
    return this.isConnected;
  }

  // Get socket instance
  getSocket() {
    return this.socket;
  }
}

// Create and export a singleton instance
const socketService = new SocketService();
export default socketService; 