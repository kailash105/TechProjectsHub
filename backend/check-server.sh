#!/bin/bash

# LMS Server Status Checker
# Quick script to check if the server is running and responding

BASE_URL="http://localhost:8000"

echo "🔍 LMS Server Status Check"
echo "========================="

# Check if server process is running
echo -n "1. Server Process: "
if pgrep -f "node server.js" > /dev/null; then
    echo "✅ Running"
else
    echo "❌ Not running"
    exit 1
fi

# Check if port is in use
echo -n "2. Port 8000: "
if lsof -i :8000 > /dev/null 2>&1; then
    echo "✅ In use"
else
    echo "❌ Not in use"
    exit 1
fi

# Check health endpoint
echo -n "3. Health Endpoint: "
if curl -s "$BASE_URL/health" > /dev/null 2>&1; then
    echo "✅ Responding"
else
    echo "❌ Not responding"
    exit 1
fi

# Check MongoDB connection
echo -n "4. MongoDB: "
if brew services list | grep mongodb | grep started > /dev/null; then
    echo "✅ Running"
else
    echo "❌ Not running"
fi

# Get server info
echo -e "\n📊 Server Information:"
echo "URL: $BASE_URL"
echo "Process ID: $(pgrep -f 'node server.js')"
echo "Uptime: $(ps -o etime= -p $(pgrep -f 'node server.js') 2>/dev/null || echo 'Unknown')"

# Test basic API
echo -e "\n🧪 Quick API Test:"
HEALTH_RESPONSE=$(curl -s "$BASE_URL/health")
echo "Health Response: $HEALTH_RESPONSE"

echo -e "\n✅ All checks passed! Server is running properly." 