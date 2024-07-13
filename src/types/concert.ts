export type Concert = {
    title: string;
    date: string;
    place: string;
    city: string;
    country: string;
    worksByComposer: WorkByComposer[];
    participants: Participant[];
    image: string;
}

export type Participant = {
    title: string;
    name: string;
}

export type WorkByComposer = {
    composer: string;
    works: string[];
}
