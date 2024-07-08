export type Concert = {
    title:           string;
    date:            Date;
    place:           string;
    worksByComposer: WorkByComposer[];
    participants:    Participant[];
}

export type Participant = {
    title: string;
    name:  string;
}

export type WorkByComposer = {
    composer: string;
    works: string[];
}
