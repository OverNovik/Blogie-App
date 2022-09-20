interface Data {
  id: Number;
  title: String;
  text: String;
  url1: any[];
  url2: any[];
}

export const data: Data[] = [
  {
    id: 1,
    title: 'What should I know about Blogie?',
    text: 'Blogie is an open platform where 170 million readers come to find insightful and dynamic thinking.',
    url1: [
      require('../assets/tutorialImages/firstScreen/1.png'),
      require('../assets/tutorialImages/firstScreen/2.png'),
      require('../assets/tutorialImages/firstScreen/3.png'),
    ],
    url2: [
      require('../assets/tutorialImages/firstScreen/2.png'),
      require('../assets/tutorialImages/firstScreen/4.png'),
      require('../assets/tutorialImages/firstScreen/5.png'),
    ],
  },
  {
    id: 2,
    title: 'Write your ideas on the blog',
    text: 'You can write your idea here and shar it with other people',
    url1: [
      require('../assets/tutorialImages/secondScreen/1.png'),
      require('../assets/tutorialImages/secondScreen/3.png'),
      require('../assets/tutorialImages/secondScreen/4.png'),
    ],
    url2: [
      require('../assets/tutorialImages/secondScreen/2.png'),
      require('../assets/tutorialImages/secondScreen/1.png'),
      require('../assets/tutorialImages/secondScreen/5.png'),
    ],
  },
  {
    id: 3,
    title: 'Read according to your passion',
    text: 'You can read and explore your passion by using this application.',
    url1: [
      require('../assets/tutorialImages/thirdScreen/1.png'),
      require('../assets/tutorialImages/thirdScreen/4.png'),
      require('../assets/tutorialImages/thirdScreen/3.png'),
    ],
    url2: [
      require('../assets/tutorialImages/thirdScreen/2.png'),
      require('../assets/tutorialImages/thirdScreen/3.png'),
      require('../assets/tutorialImages/thirdScreen/5.png'),
    ],
  },
];
