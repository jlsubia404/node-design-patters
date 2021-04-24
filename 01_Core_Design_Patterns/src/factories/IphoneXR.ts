import {Phone} from './phone';

export class IPhoneXR extends Phone {
    constructor(serialNum: string) {
        super(serialNum, 'iPhone XR','A12 Bionic', '3 GB', 75.7, 150.9, 8.3, '828 x 1792');
    }
}