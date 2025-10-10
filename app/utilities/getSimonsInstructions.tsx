export default function getSimonsInstructions(level: number, count: number, currentInstructions?: string[]): string[] { 
    const roundOnePossibilities: string[] = ['red square', 'blue square', 'green square', 'yellow square'];
    const roundTwoAdditionalPossibilities: string[] = ['red circle', 'blue circle', 'green circle', 'yellow circle', 'purple star'];
    const roundThreeAdditionalPossibilities: string[] = ['red triangle', 'blue triangle', 'green triangle', 'yellow triangle'];
    const roundFourAdditionalPossibilities: string[] = ['red star', 'blue star', 'green star', 'yellow star'];

    let possibilities = [...roundOnePossibilities];

    if (level === 2) {
        possibilities = [...roundOnePossibilities, ...roundTwoAdditionalPossibilities];
    }
    
    if (level === 3) {
        possibilities = [...roundOnePossibilities, ...roundTwoAdditionalPossibilities, ...roundThreeAdditionalPossibilities];
    } 
    
    if (level === 4) {
        possibilities = [...roundOnePossibilities, ...roundTwoAdditionalPossibilities, ...roundThreeAdditionalPossibilities, ...roundFourAdditionalPossibilities];
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