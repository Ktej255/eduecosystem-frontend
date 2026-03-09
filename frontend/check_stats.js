
const { QuestionBankService } = require('./src/components/batch1/history/question-bank/QuestionBankService');
// Mocking browser/next environment if necessary, but QuestionBankService seems to be pure JS logic mostly
try {
    const stats = QuestionBankService.getStats();
    console.log(JSON.stringify(stats, null, 2));
} catch (e) {
    console.error(e);
}
