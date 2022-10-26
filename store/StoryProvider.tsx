import React, {useState} from 'react';
import {StoryContext} from './storyContext';

interface StoryProviderProps {
  children: React.ReactNode;
}

const StoryProvider = ({children}: StoryProviderProps) => {
  const [storyText, setStoryText] = useState('');
  const [storyTitle, setStoryTitle] = useState('');

  return (
    <StoryContext.Provider
      value={{storyText, setStoryText, storyTitle, setStoryTitle}}>
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
