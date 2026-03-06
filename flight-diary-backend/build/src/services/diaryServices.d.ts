import type { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types.js';
declare const _default: {
    getEntries: () => DiaryEntry[];
    addDiary: (entry: NewDiaryEntry) => DiaryEntry;
    getNonSensitiveEntries: () => NonSensitiveDiaryEntry[];
    findById: (id: number) => DiaryEntry | undefined;
};
export default _default;
//# sourceMappingURL=diaryServices.d.ts.map