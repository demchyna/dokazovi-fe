import React, { Suspense } from 'react';
import './App.css';
import { MOCK_DATA } from './lib/components/PostPreview/post-preview-config';
import PostPreviewCard from './lib/components/PostPreview/PostPreviewCard';
import { RenderRoutes } from './navigation/Router';
import ROUTER_CONFIG from './navigation/router-config';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <div className="App">
        <header className="App-header" />
        <PostPreviewCard data={MOCK_DATA} />
        <RenderRoutes routes={ROUTER_CONFIG} />
      </div>
    </Suspense>
  );
};

export default App;
