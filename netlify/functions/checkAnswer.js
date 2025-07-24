// exports.handler는 Netlify 서버리스 함수의 정해진 형식입니다.
exports.handler = async function(event, context) {
    
    // 사용자가 보낸 데이터를 받습니다.
    const { answer } = JSON.parse(event.body);

    // 실제 정답을 여기에만 저장합니다.
    const correctAnswer = 'OPENS';

    // 사용자의 답과 실제 정답을 비교합니다 (대소문자 구분 없이).
    const isCorrect = answer.toUpperCase() === correctAnswer;

    // 결과를 JSON 형태로 프론트엔드에 돌려줍니다.
    return {
        statusCode: 200, // 성공적으로 통신했다는 뜻
        body: JSON.stringify({ correct: isCorrect })
    };
};
