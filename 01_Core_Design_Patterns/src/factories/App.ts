import {Phone} from './phone';
import {IPhoneXR}  from './IphoneXR';
import iPhoneFactory from './IPhoneFactory';

//this is bad, what would happened if I had had many models? 
// for that situation we create IphoneXR.ts
const iphoneXRBad = new Phone('IPXR-001', 'iPhone XR','A12 Bionic', '3 GB', 75.7, 150.9, 8.3, '828 x 1792');

iphoneXRBad.displayConfig();

iphoneXRBad.dial('1234567890');


const newIphoneXR = new IPhoneXR('IPXR-002');


newIphoneXR.displayConfig();

// creating objects by a factory

const iPhoneXSByFactory = iPhoneFactory.create('iPhone XS', 'S/N');
iPhoneXSByFactory?.displayConfig();