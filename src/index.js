import React from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertAppX';
import './index.css';

const divRoot = document.getElementById('root')
const root = createRoot(divRoot);

root.render(
  <GifExpertApp />
  );

