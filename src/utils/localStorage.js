const PREFIX = 'MEDCONNECT: ';

const storage = {
    save: (key, value) => {
        localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
    },
    get: (key) => {
        const data = localStorage.getItem(`${PREFIX}${key}`);
        return data ? JSON.parse(data) : null;
    },
    remove: (key) => {
        localStorage.removeItem(`${PREFIX}${key}`);
    }
};

export default storage;