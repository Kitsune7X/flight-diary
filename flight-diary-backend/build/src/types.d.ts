export declare enum Weather {
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Stormy = "stormy",
    Windy = "windy"
}
export declare enum Visibility {
    Great = "great",
    Good = "good",
    Ok = "ok",
    Poor = "poor"
}
export interface DiaryEntry extends NewDiaryEntry {
    id: number;
}
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
export interface NewDiaryEntry {
    weather: Weather;
    visibility: Visibility;
    date: string;
    comment?: string | undefined;
}
//# sourceMappingURL=types.d.ts.map