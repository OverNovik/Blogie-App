import {Dispatch, SetStateAction} from 'react';
import {createContext} from 'react';

interface Story {
  storyText: string;
  setStoryText: Dispatch<SetStateAction<string>>;
  storyTitle: string;
  setStoryTitle: Dispatch<SetStateAction<string>>;
  storyImage: string;
  setStoryImage: Dispatch<SetStateAction<string>>;
  storyViews: number;
  setStoryViews: Dispatch<SetStateAction<number>>;
  storyLikes: number;
  setStoryLikes: Dispatch<SetStateAction<number>>;
}

export const StoryContext = createContext(null as unknown as Story);
