const parseEnv = () => {
    const envList = [];

    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            envList.push(`${key}=${process.env[key]}`);
        }
    }

    console.log(envList.join('; '));
};

parseEnv();