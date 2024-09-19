export type TSubtitle = {
    id: string;
    title: string;
    status: 'scheduled' | 'in_progress' | 'canceled' | 'completed' | 'failed';
    start_date: string | null;
    finish_date: string | null;
    created_at: string;
    language: string | null;
    user_id: string;
};

export type TSubtitleSegment = {
    segment_id: number;
    subtitle_id: string;
    start: number;
    end: number;
    text: string;
};
