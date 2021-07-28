const counts = {
    zero: 0,
    gen1: 151,
    gen2: 100,
    gen3: 135,
    gen4: 107,
    gen5: 156,
    gen6: 72,
    gen7: 86,
    total: 807
};

export function getGenData(gen) {
    switch (gen) {
        case 0:
            return gen = { id: 0, offset: counts.zero, limit: counts.total, msg: 'All Generations' }; // ID 0 for All Gens
        case 1:
            return gen = { id: 1, offset: counts.zero, limit: counts.gen1, msg: 'Generation 1' }; // Gen 1
        case 2:
            return gen = { id: 2, offset: counts.gen1, limit: counts.gen2, msg: 'Generation 2' }; // Gen 2
        case 3:
            return gen = { id: 3, offset: counts.gen1 + counts.gen2, limit: counts.gen3, msg: 'Generation 3' }; // Gen 3
        case 4:
            return gen = { id: 4, offset: counts.gen1 + counts.gen2 + counts.gen3, limit: counts.gen4, msg: 'Generation 4' }; // Gen 4
        case 5:
            return gen = { id: 5, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4, limit: counts.gen5, msg: 'Generation 5' }; // Gen 5
        case 6:
            return gen = { id: 6, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4 + counts.gen5, limit: counts.gen6, msg: 'Generation 6' }; // Gen 6
        case 7:
            return gen = { id: 7, offset: counts.gen1 + counts.gen2 + counts.gen3 + counts.gen4 + counts.gen5 + counts.gen6, limit: counts.gen7, msg: 'Generation 7' }; // Gen 7
        case 8:
            return gen = { id: 8, offset: counts.zero, limit: counts.gen1, msg: 'Select Generation' }; // ID 8 for default: Gen 1
        case 9:
            return gen = { id: 9, offset: counts.zero, limit: 24, msg: 'Select Generation' }; // Custom ID for testing in new UI
        default:
            return gen = { id: 8, offset: counts.zero, limit: counts.gen1, msg: 'Select Generation' }; // Duplicate of 8
    };
};