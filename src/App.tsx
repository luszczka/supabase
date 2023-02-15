import { useState } from 'react';
import { type ReactElement } from 'react';
import './App.css';

const App = (): ReactElement => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogPost, setBlogPost] = useState({ title: '', description: '' });

  return <div></div>;
};

export default App;
