import {Phone} from './phone';

export class IPhoneXS extends Phone {
    constructor(serialNum: string) {
        super(serialNum, 'iPhone XS','A14 Bionic', '64 GB', 75.7, 150.9, 8.3, '828 x 1792');
    }
}