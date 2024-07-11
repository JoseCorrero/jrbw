export type Concert = {
    title: string;
    date: string;
    place: string;
    city: string;
    country: string;
    worksByComposer: WorkByComposer[];
    participants: Participant[];
}

export type Participant = {
    title: string;
    name: string;
}

export type WorkByComposer = {
    composer: string;
    works: string[];
}
