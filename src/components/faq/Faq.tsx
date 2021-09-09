import React, {useMemo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import faqData from '../../utils/faqData';
import faqStyles from './faqStyles';
const Faq = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const setTab = useMemo(() => {
    return (index: number) => () => {
      const tabIndex = currentIndex === index ? -1 : index;
      setCurrentIndex(tabIndex);
    };
  }, [currentIndex]);

  const faqAccordion = useMemo(() => {
    {
      return faqData.map(({title, description}, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={setTab(index)}>
            <View
              style={
                index === currentIndex
                  ? faqStyles.activeContainer
                  : faqStyles.container
              }>
              <Text
                style={
                  index === currentIndex
                    ? faqStyles.activeTitle
                    : faqStyles.title
                }>
                {title}
              </Text>
              {index === currentIndex && (
                <View style={faqStyles.descriptionWrapper}>
                  <Text style={faqStyles.descriptionTitle}>{description}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      });
    }
  }, [setTab]);
  return (
    <View style={{paddingHorizontal: 30}}>
      <Text style={faqStyles.heading}>FAQ</Text>
      <View
        style={{
          borderRadius: 30,
          padding: 10,
          backgroundColor: '#202944',
        }}>
        {faqAccordion}
      </View>
    </View>
  );
};

export default Faq;
