export interface SonosApiConfig {
    server: string;
    port: string;
    rooms: string[];
	normalizeVolume?: string;
	pauseOnLeave?: boolean;
    tts?: {
        enabled?: boolean;
        language?: string;
        volume?: string;
    };
}
