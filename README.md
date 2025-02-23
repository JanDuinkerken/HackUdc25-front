# KeleaCare
This repository contains the frontend for the **KeleaCare** project, developed during the HackUdc hackathon on 2025.

This project consists of an AI chatbot that, using context that can be provided every day on a personal diary, aims to help with emotional problems and provide a personal profiling of your common mental state.

## Setup
Firstly clone the project with the following command:
```bash
git clone https://github.com/JanDuinkerken/HackUdc25-front.git
```

### Dependencies
To run this project the following dependencies are needed:
- NodeJS v23.8.0
- NPM v11.1.0

### How to run localy
To launch the frontend run the following commands from the root of the project:
```bash
npm install
npm run dev
```

### How to build
If instead of running the development server you want to build the project to later host it with an independent HTTP server you can run:
```bash
npm run build
```

### How to run dockerized
From the root of the project run:
```bash
docker build . -t "hackudc25-front"
docker compose up
```