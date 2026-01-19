export interface PhaseInfo {
    phase_id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    status_message: string;
}

export interface SlotTask {
    slot_id: string;
    db_topic_id: string; // Used for toggling
    time_label: string;
    subject: string;
    topic: string;
    description: string;
    duration_minutes: number;
    is_locked: boolean;
    is_completed: boolean;
    required_slot_id?: string;
    action_type: 'reading' | 'practice' | 'revision' | 'mock';
}

export interface DashboardState {
    current_phase: PhaseInfo;
    today_date: string;
    day_number_in_phase: number;
    slots: SlotTask[];
    daily_progress: number;
}
