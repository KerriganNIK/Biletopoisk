type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional?: (string | undefined)[]): string {
    const modifierEntries = mods ? Object.entries(mods) : [];
    return [
        cls,
        ...(additional ? additional.filter(Boolean) : []),
        ...modifierEntries
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
