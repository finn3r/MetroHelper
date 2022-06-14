import {matchSorter} from "match-sorter";

const toTransit = (text: string): string => {
    text = text.toLowerCase().replace(/ё/gi, 'е');
    let newText: string = '';
    let converter: { [letter: string]: string } = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
        'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '', 'э': 'e',
        'ю': 'yu', 'я': 'ya'
    };

    for (let i = 0; i < text.length; ++i) {
        if (converter[text[i]] === undefined) {
            newText += text[i];
        } else {
            newText += converter[text[i]];
        }
    }

    return newText;
};

const fromEngToRu = (text: string): string => {
    text = text.toLowerCase().replace(/ё/gi, 'е');
    let newText: string = "";
    let converter: { [letter: string]: string } = {
        '`': 'е', 'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к',
        't': 'е', 'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ',
        'p': 'з', '[': 'х', ']': 'ъ', 'a': 'ф', 's': 'ы',
        'd': 'в', 'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о',
        'k': 'л', 'l': 'д', ';': 'ж', '\'': 'э', 'z': 'я',
        'x': 'ч', 'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т',
        'm': 'ь', ',': 'б', '.': 'ю', '~': 'Е', '{': 'Х',
        '}': 'Ъ', ':': 'Ж', '"': 'Э', '<': 'Б', '>': 'Ю'
    };

    for (let i = 0; i < text.length; ++i) {
        if (converter[text[i]] === undefined) {
            newText += text[i];
        } else {
            newText += converter[text[i]];
        }
    }

    return newText;
};

const filterOptions = (inputValue: string, options: string[]) => matchSorter(options, fromEngToRu(inputValue), {
    threshold: matchSorter.rankings.WORD_STARTS_WITH,
    keys: [item => fromEngToRu(toTransit(item)), item => item.replace(/ё/gi, 'е')]
});

export default filterOptions;