import React from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const ChunkingAndCodeSpliting = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
    </React.Suspense>
);
export default ChunkingAndCodeSpliting;