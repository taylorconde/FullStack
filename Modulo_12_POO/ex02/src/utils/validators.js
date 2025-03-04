// Funções de validação
export function validateName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}

export function validateCrew(crew) {
    return Number.isInteger(crew) && crew > 0;
}