#!/bin/zsh
cd /Users/sravanpuli/jash || exit 1

echo "Starting Jaswanth portfolio..."
echo "Open: http://localhost:3000/"
echo

python3 -m http.server 3000 --bind 127.0.0.1
