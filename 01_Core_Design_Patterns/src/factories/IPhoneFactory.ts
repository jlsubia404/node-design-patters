import {IPhoneXR}  from './IphoneXR';
import {IPhoneXS}  from './IphoneXS';


class IPhoneFactory {

    create(type: string, serialNum: string) {

        switch (type){
            case 'iPhone XR': 
                return new IPhoneXR(serialNum);
            case 'iPhone XS':
                return new IPhoneXS(serialNum);
            default: {
                console.log('Unknow iPhone');
            }
        }
    }
}

export = new IPhoneFactory();