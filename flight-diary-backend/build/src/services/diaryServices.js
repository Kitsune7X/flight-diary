import diaries from '../../data/entries.js';
const getEntries = () => {
    return diaries;
};
const getNonSensitiveEntries = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
const findById = (id) => {
    const entry = diaries.find((d) => d.id === id);
    return entry;
};
const addDiary = (entry) => {
    const newDiaryEntry = {
        ...entry,
        id: Math.max(...diaries.map((d) => d.id)) + 1,
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById,
};
//# sourceMappingURL=diaryServices.js.map