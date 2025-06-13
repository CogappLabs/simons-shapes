export default function getSimonsInstructions(level: number, count: number, currentInstructions?: string[]): string[] { 
    const possibilities: string[] = ['red square', 'blue square', 'green square', 'yellow square', 'red circle', 'blue circle', 'green circle', 'yellow circle', 'purple star'];
    
    if (level === 2) {
        possibilities.push('red triangle', 'blue triangle', 'green triangel', 'yellow triangle');
    } 
    
    if (level === 3) {
        possibilities.push('red triangle', 'blue triangle', 'green triangel', 'yellow triangle', 'red star', 'blue star', 'green star', 'yellow star');
    }

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