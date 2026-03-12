import SocraticChatWidget from '@/components/upsc/platform/ai/SocraticChatWidget';
import VoiceCommandListener from '@/components/upsc/platform/utils/VoiceCommandListener';
import MoodTracker from '@/components/upsc/platform/mood/MoodTracker';

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
