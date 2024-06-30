import React, { useState } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';

export const AnimatedHeaderScroll = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: false,
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: 'white',
          opacity: headerOpacity,
          transform: [{ translateY: headerTranslate }],
        }}
      >
        <Text style={{ fontSize: 24, textAlign: 'center', padding: 20 }}>Your Header</Text>
      </Animated.View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 100 }}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <Text style={{ fontSize: 16, padding: 20 }}>Scroll down to see the header animation</Text>
      </ScrollView>
    </View>
  );
};
