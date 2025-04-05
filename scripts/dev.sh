#!/bin/bash

# Kill any process using ports 3000-3006
lsof -i :3000-3006 | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null

# Start the development server on port 3000
PORT=3000 npm run dev 