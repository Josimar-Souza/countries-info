const generateRandomUUID = (sufix) => `${crypto.randomUUID()}-${sufix}`;

export default generateRandomUUID;
