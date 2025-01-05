const addWords = (id, word, color, delay, callback) => {
    document.getElementById(id).style.color = color;
    let word_index = 0;
    let intervalId = setInterval(() => {
        if (word_index !== word.length) {
            document.getElementById(id).textContent += word[word_index];
            word_index += 1;
        } else {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, delay);
};

const removeWords = (id, delay, callback) => {
    let text = document.getElementById(id).textContent;
    let intervalId = setInterval(() => {
        if (text.length > 0) {
            text = text.slice(0, -1);
            document.getElementById(id).textContent = text;
        } else {
            clearInterval(intervalId);
            if (callback) callback();
        }
    }, delay);
};

const changeWord = (id, new_word, color, delay) => {
    addWords(id, new_word, color, delay, () => {
        removeWords(id, delay, () => {
            setTimeout(() => {
                let nextIndex = (words.indexOf(new_word) + 1) % words.length;
                changeWord(id, words[nextIndex], colors[nextIndex], delay);
            }, delay);
        });
    });
};

const words = ["Engaging", "Interactive", "Intuitive", "Fluid", "Elegant"];
const colors = ["#8A2BE2", "#00CED1", "#FF4500", "#32CD32", "#FFD700"];


changeWord('word', words[0], colors[0], 100);
