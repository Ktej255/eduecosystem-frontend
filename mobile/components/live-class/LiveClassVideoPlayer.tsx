import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Video, Mic, MicOff, VideoOff, PhoneOff } from 'lucide-react-native';

// Note: In a real implementation, you would install react-native-agora
// import RtcEngine, { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora';

interface LiveClassVideoPlayerProps {
    channelName: string;
    token: string;
    appId: string;
    uid: number;
    onLeave: () => void;
}

export const LiveClassVideoPlayer: React.FC<LiveClassVideoPlayerProps> = ({
    channelName,
    token,
    appId,
    uid,
    onLeave,
}) => {
    const [joined, setJoined] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [remoteUsers, setRemoteUsers] = useState<number[]>([]);

    useEffect(() => {
        initAgora();
        return () => {
            // destroyAgora();
        };
    }, []);

    const initAgora = async () => {
        // Mock initialization
        console.log('Initializing Agora with:', { appId, channelName, token, uid });
        setTimeout(() => {
            setJoined(true);
            // Simulate a remote user joining
            setRemoteUsers([12345]);
        }, 1000);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // engine.muteLocalAudioStream(!isMuted);
    };

    const toggleVideo = () => {
        setIsVideoEnabled(!isVideoEnabled);
        // engine.muteLocalVideoStream(!isVideoEnabled);
    };

    if (!joined) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>Joining Class...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Remote Video (Instructor) */}
            <View style={styles.remoteContainer}>
                {remoteUsers.length > 0 ? (
                    <View style={styles.remoteVideoPlaceholder}>
                        <Text style={styles.placeholderText}>Instructor Video Stream</Text>
                        {/* <RtcRemoteView
                style={styles.remoteVideo}
                uid={remoteUsers[0]}
                channelId={channelName}
                renderMode={VideoRenderMode.Hidden}
              /> */}
                    </View>
                ) : (
                    <View style={styles.waitingContainer}>
                        <Text style={styles.waitingText}>Waiting for instructor...</Text>
                    </View>
                )}
            </View>

            {/* Local Video (Self) */}
            <View style={styles.localContainer}>
                {isVideoEnabled ? (
                    <View style={styles.localVideoPlaceholder}>
                        <Text style={styles.smallText}>You</Text>
                        {/* <RtcLocalView
                style={styles.localVideo}
                channelId={channelName}
                renderMode={VideoRenderMode.Hidden}
              /> */}
                    </View>
                ) : (
                    <View style={[styles.localVideoPlaceholder, { backgroundColor: '#333' }]}>
                        <VideoOff size={20} color="#fff" />
                    </View>
                )}
            </View>

            {/* Controls */}
            <View style={styles.controls}>
                <TouchableOpacity
                    style={[styles.controlButton, isMuted && styles.controlButtonActive]}
                    onPress={toggleMute}
                >
                    {isMuted ? <MicOff size={24} color="#fff" /> : <Mic size={24} color="#fff" />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.controlButton, styles.leaveButton]}
                    onPress={onLeave}
                >
                    <PhoneOff size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.controlButton, !isVideoEnabled && styles.controlButtonActive]}
                    onPress={toggleVideo}
                >
                    {isVideoEnabled ? <Video size={24} color="#fff" /> : <VideoOff size={24} color="#fff" />}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    loadingText: {
        color: '#fff',
        marginTop: 10,
    },
    remoteContainer: {
        flex: 1,
    },
    remoteVideoPlaceholder: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
    },
    remoteVideo: {
        flex: 1,
    },
    waitingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    waitingText: {
        color: '#fff',
        fontSize: 16,
    },
    localContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 100,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#fff',
        elevation: 5,
    },
    localVideoPlaceholder: {
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    localVideo: {
        flex: 1,
    },
    placeholderText: {
        color: '#888',
    },
    smallText: {
        color: '#fff',
        fontSize: 10,
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    controls: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    controlButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlButtonActive: {
        backgroundColor: '#fff',
    },
    leaveButton: {
        backgroundColor: '#ff4444',
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});
