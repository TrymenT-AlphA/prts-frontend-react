#!/usr/bin/bash
docker build -t prts-frontend .
docker run -p 3000:3000 -d prts-frontend