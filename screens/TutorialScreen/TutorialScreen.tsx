/* eslint-disable @typescript-eslint/no-shadow */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../../components/UI/Button/Button';
import {Data, data} from '../../data/carouselData';
import {AuthNativeStackProps} from '../../navigation/types';
import {styles} from './style';

interface RenderData {
  item: Data;
  index?: number;
}

type TutorialNavigationProps = NavigationProp<
  AuthNativeStackProps,
  'TutorialScreen'
>;

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const renderItem = ({item}: RenderData) => {
  const images1 = item.firstImages;
  const images2 = item.secondImages;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imagesContainer}>
        <View>
          {images1.map((item: number) => (
            <Image source={item} style={styles.image} key={Math.random()} />
          ))}
        </View>
        <View>
          {images2.map((item: number) => (
            <Image source={item} style={styles.image} key={Math.random()} />
          ))}
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const TutorialScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const isCarousel = useRef<Carousel<Data> | null>(null);
  const navigation = useNavigation<TutorialNavigationProps>();

  useEffect(() => {
    const interval = setInterval(() => {
      isCarousel?.current?.snapToNext();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index: number) => setIndex(index)}
      />
      <Button
        onPress={
          index !== 2
            ? () => isCarousel?.current?.snapToNext()
            : () => navigation.navigate('LoginScreen')
        }
        styleProp={index === 2 ? styles.startedBtn : styles.skipBtn}>
        {index !== 2 ? 'Skip' : 'Get started'}
      </Button>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
      />
    </View>
  );
};

export default TutorialScreen;
