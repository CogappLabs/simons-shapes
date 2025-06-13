export default function getSimonsInstructions(count: number, currentInstructions?: string[]): string[] { 
    const possibilities: string[] = ['red square', 'blue square', 'green square', 'yellow square', 'red circle', 'blue circle', 'green circle', 'yellow circle', 'purple star'];

    const instructions: string[] = currentInstructions ? currentInstructions : [];

    const getRandomElement = (): string => {
        return possibilities[Math.floor(Math.random()*possibilities.length)];
    }

    let i: number = 0;

    while (i < count && instructions.length < count) {
        instructions.push(getRandomElement());
        i++;
    }

    return instructions;
}