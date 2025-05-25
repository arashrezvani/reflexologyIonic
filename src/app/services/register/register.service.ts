import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private CodeRegister:string='';
  constructor() { }

  
  convertStringToAsciiString(inputString: string,c: string,m: string): string {
    inputString=inputString+"koohi"+c;
    let asciiString = '';

    //alert('inputString  :'+inputString);
    console.log("++++++++++++++++this.CodeRegister :",inputString)
    for (let i = 0; i < inputString.length; i++) {
      
      asciiString += inputString.charCodeAt(i).toString();  // تبدیل کد ASCII به رشته و اضافه کردن به نتیجه
      console.log("++++++++++++++++this.asciiString :",asciiString)
    }
    //alert('asciiString  :'+asciiString);
    console.log("++++++++++++++++this.asciiString  total   ****   :",asciiString)
    return asciiString;
  }
}
