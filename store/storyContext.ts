import {Dispatch, SetStateAction} from 'react';
import {createContext} from 'react';

interface Story {
  storyText: string;
  setStoryText: Dispatch<SetStateAction<string>>;
  storyTitle: string;
  setStoryTitle: Dispatch<SetStateAction<string>>;
}

export const StoryContext = createContext(null as unknown as Story);
