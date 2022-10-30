import React, {useState} from 'react';
import {StoryContext} from './storyContext';

interface StoryProviderProps {
  children: React.ReactNode;
}

const StoryProvider = ({children}: StoryProviderProps) => {
  const [storyText, setStoryText] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyImage, setStoryImage] = useState('');
  const [storyViews, setStoryViews] = useState(0);
  const [storyLikes, setStoryLikes] = useState(0);

  return (
    <StoryContext.Provider
      value={{
        storyText,
        setStoryText,
        storyTitle,
        setStoryTitle,
        storyImage,
        setStoryImage,
        storyViews,
        setStoryViews,
        storyLikes,
        setStoryLikes,
      }}>
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
