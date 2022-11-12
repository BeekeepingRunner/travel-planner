import { AbstractEntity } from '../../../shared/persistence/entities';

export class Travel implements AbstractEntity {

    public static readonly COLLECTION_NAME: string = 'travels'
    public static readonly USER_ID_FK: string = 'userUID'

    constructor(
        public id: number,
        public name: string,
        public userUID: string
    ) {}
}