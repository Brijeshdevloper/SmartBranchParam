import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-encryption',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encryption.component.html',
  styleUrl: './encryption.component.css'
})
export class EncryptionComponent {

  inputText: string = ''; // To capture input from the form
  encryptedText: string = ''; // To hold encrypted data
  decryptedText: string = ''; // To hold decrypted data
  secretKey:string='SmartBranchDae';
  constructor() {}

  // Method to handle form submission
   onSubmit() {
      let validUrl = false;
        // Encrypt the input text
        //this.encryptedText = CryptoJS.AES.encrypt(this.inputText, this.secretKey).toString();;
    
        // Decrypt the encrypted text to show the original data
        //this.decryptedText = CryptoJS.AES.decrypt(this.encryptedText, this.secretKey).toString(CryptoJS.enc.Utf8);
  
        while (!validUrl) {
          // Encrypt the value
          const encrypt = CryptoJS.AES.encrypt(this.inputText, this.secretKey).toString();
          const encoded = encodeURIComponent(encrypt);
      
          // Check the condition: only the third last character should be '%'
          const thirdLastIndex = encoded.length - 3;
          const hasOnlyOnePercent =
            encoded.split('%').length - 1 === 1 && encoded[thirdLastIndex] === '%';
      
          if (hasOnlyOnePercent) {
            validUrl = true; // Condition met
            this.encryptedText = encoded;
          }
        }
  
         // Decrypt the encrypted text to show the original data
         let decrypt=CryptoJS.AES.decrypt(this.encryptedText, this.secretKey).toString(CryptoJS.enc.Utf8);
        this.decryptedText = decodeURIComponent(decrypt)
        console.log("this.decryptedText",this.decryptedText);
      }
   
}
