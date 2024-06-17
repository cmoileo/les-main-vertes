const variableNames = ["--primary-color", "--secondary-color"] as const;

interface TypeDefinition {
    "--primary-color": string;
    "--secondary-color"?: string;
}

const types: Record<string, TypeDefinition> = {
    Arthrose: {
        "--primary-color": "red"
    },
    Daltonyen: {
        "--primary-color": "blue"
    },
    Parkinson: {
        "--primary-color": "green"
    }
};

type TypeKeys = keyof typeof types;

const changeVariables = (type: TypeKeys) => {
    const variables = types[type];
    for (const variableName of variableNames) {
        const value = variables[variableName];
        if (value) {
            document.documentElement.style.setProperty(variableName, value);
        }
    }
}

export { changeVariables }
