export interface Data {
  id: number;
  title: string;
  text: string;
  firstImages: number[];
  secondImages: number[];
}

export const data: Data[] = [
  {
    id: 1,
    title: 'What should I know about Blogie?',
    text: 'Blogie is an open platform where 170 million readers come to find insightful and dynamic thinking.',
    firstImages: [
      require('../assets/tutorialImages/firstScreen/1.png'),
      require('../assets/tutorialImages/firstScreen/2.png'),
      require('../assets/tutorialImages/firstScreen/3.png'),
    ],
    secondImages: [
      require('../assets/tutorialImages/firstScreen/2.png'),
      require('../assets/tutorialImages/firstScreen/4.png'),
      require('../assets/tutorialImages/firstScreen/5.png'),
    ],
  },
  {
    id: 2,
    title: 'Write your ideas on the blog',
    text: 'You can write your idea here and shar it with other people',
    firstImages: [
      require('../assets/tutorialImages/secondScreen/1.png'),
      require('../assets/tutorialImages/secondScreen/3.png'),
      require('../assets/tutorialImages/secondScreen/4.png'),
    ],
    secondImages: [
      require('../assets/tutorialImages/secondScreen/2.png'),
      require('../assets/tutorialImages/secondScreen/1.png'),
      require('../assets/tutorialImages/secondScreen/5.png'),
    ],
  },
  {
    id: 3,
    title: 'Read according to your passion',
    text: 'You can read and explore your passion by using this application.',
    firstImages: [
      require('../assets/tutorialImages/thirdScreen/1.png'),
      require('../assets/tutorialImages/thirdScreen/4.png'),
      require('../assets/tutorialImages/thirdScreen/3.png'),
    ],
    secondImages: [
      require('../assets/tutorialImages/thirdScreen/2.png'),
      require('../assets/tutorialImages/thirdScreen/3.png'),
      require('../assets/tutorialImages/thirdScreen/5.png'),
    ],
  },
];
