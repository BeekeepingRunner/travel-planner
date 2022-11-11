import { AbstractEntity } from './../../../shared/entities';

export class Travel implements AbstractEntity {
    constructor(
        public id: number,
        public name: string,
        public userMail: string
    ) {}
}