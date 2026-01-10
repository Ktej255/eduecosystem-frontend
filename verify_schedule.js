
const { LAXMIKANTH_CHAPTERS, generateWeeklySchedule, SLOTS_PER_DAY } = require('./frontend/src/components/batch1/polity/data/polity-schedule-data.js');

const schedule = generateWeeklySchedule();
console.log(`Total Weeks: ${schedule.length}`);
console.log(`Total Chapters: ${LAXMIKANTH_CHAPTERS.length}`);
const totalPages = LAXMIKANTH_CHAPTERS.reduce((sum, ch) => sum + ch.pages, 0);
console.log(`Total Pages: ${totalPages}`);

let totalSlots = 0;
schedule.forEach(w => {
    totalSlots += w.totalSlots;
});
console.log(`Total Slots (Hours): ${totalSlots}`);
console.log(`Average Slots per week: ${totalSlots / schedule.length}`);
console.log(`Expected Weeks (@15h/week): ${totalSlots / 15}`);

// Check first week
console.log("\nWeek 1 Overview:");
['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].forEach(day => {
    const dayData = schedule[0].days[day];
    const daySlots = dayData.reduce((sum, c) => sum + c.slots, 0);
    console.log(`${day}: ${daySlots} slots, ${dayData.length} chapters`);
});
