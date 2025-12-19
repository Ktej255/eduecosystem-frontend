import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';

interface VideoPlayerProps {
  videoUri: string;
  onComplete?: () => void;
}

export function VideoPlayer({ videoUri, onComplete }: VideoPlayerProps) {
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const video = React.useRef<Video>(null);

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (status?.isLoaded && status.didJustFinish && onComplete) {
      onComplete();
    }
  }, [status?.isLoaded && status.didJustFinish]);

  const togglePlayPause = async () => {
    if (status?.isLoaded) {
      if (status.isPlaying) {
        await video.current?.pauseAsync();
      } else {
        await video.current?.playAsync();
      }
    }
  };

  const handleSeek = async (value: number) => {
    if (status?.isLoaded) {
      await video.current?.setPositionAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{ uri: videoUri }}
        style={styles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(newStatus) => {
          setStatus(newStatus);
          if (newStatus.isLoaded) {
            setIsBuffering(newStatus.isBuffering);
          }
        }}
      />

      {isBuffering && (
        <View style={styles.bufferingContainer}>
          <ActivityIndicator size="large" color="#4F46E5" />
        </View>
      )}

      <View style={styles.controls}>
        <TouchableOpacity onPress={togglePlayPause} style={styles.playButton}>
          <Ionicons
            name={status?.isLoaded && status.isPlaying ? 'pause' : 'play'}
            size={32}
            color="white"
          />
        </TouchableOpacity>

        {status?.isLoaded && (
          <>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {formatTime(status.positionMillis)}
              </Text>
            </View>

            <Slider
              style={styles.slider}
              value={status.positionMillis}
              minimumValue={0}
              maximumValue={status.durationMillis || 0}
              onSlidingComplete={handleSeek}
              minimumTrackTintColor="#4F46E5"
              maximumTrackTintColor="#CBD5E1"
              thumbTintColor="#4F46E5"
            />

            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                {formatTime(status.durationMillis || 0)}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  bufferingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  playButton: {
    marginRight: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  timeContainer: {
    minWidth: 50,
  },
  timeText: {
    color: 'white',
    fontSize: 12,
  },
});
