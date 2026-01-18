import SocraticChatWidget from '@/components/batch1-1/ai/SocraticChatWidget';
import VoiceCommandListener from '@/components/batch1-1/utils/VoiceCommandListener';
import MoodTracker from '@/components/batch1-1/mood/MoodTracker';

export default function Batch1_1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen">
            {children}
            <MoodTracker />
            <SocraticChatWidget />
            <VoiceCommandListener />
        </div>
    );
}
