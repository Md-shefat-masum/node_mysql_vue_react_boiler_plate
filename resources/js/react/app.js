import { createRoot } from 'react-dom/client';
import React from 'react';
import Hello from '../react/Hello.jsx';
// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<div>
    <Hello>lorem asdfjl asdjf</Hello>
    <h1>lorem asdfjl asdjf</h1>
</div>);

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // clearInterval(timer);
    });
}
