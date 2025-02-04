import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'; 
@Component({
  selector: 'app-decryptedurl',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './decryptedurl.component.html',
  styleUrl: './decryptedurl.component.css'
})
export class DecryptedurlComponent {
currentParams: any = {};
inputText:any;
secretKey:string='SmartBranchDae';
arr: { [key: string]: string }[] = []; // Array to store encrypted values
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to query params changes
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.currentParams = params;
    //   console.log('Current Params:', this.currentParams);  // Debugging output
    // });
    const encryptedText = this.activatedRoute.snapshot.paramMap.get('text');
    console.log("encryptedText",encryptedText);
    
    if (encryptedText) {
      this.currentParams = CryptoJS.AES.decrypt(
        encryptedText,
        this.secretKey
      ).toString(CryptoJS.enc.Utf8);
      console.log("currentParams",this.currentParams)
    }
  }

   // Method to handle form submission and save JSON
  onSubmit() {
    const array = JSON.parse(this.inputText);
    array.forEach((value:any) => {
      let validUrl = false; // Flag to check if the condition is met
      let encryptedUrl = '';

      while (!validUrl) {
        // Encrypt the value
        const encrypt = CryptoJS.AES.encrypt(value, this.secretKey).toString();
        const encoded = encodeURIComponent(encrypt);

        // Check the condition: only the third last character should be '%'
        const thirdLastIndex = encoded.length - 3;
        const hasOnlyOnePercent =
          encoded.split('%').length - 1 === 1 && encoded[thirdLastIndex] === '%';

        if (hasOnlyOnePercent) {
          validUrl = true; // Condition met
          encryptedUrl = encoded;
        }
      }

      // Store the final valid URL in the array
      this.arr.push({ [value]: encryptedUrl });
    });

    // Call the method to save JSON
    this.saveAsJsonFile(this.arr, 'encrypted-data.json');
  }

  // Method to save JSON file locally
  saveAsJsonFile(data: any, fileName: string) {
    const json = JSON.stringify(data, null, 2); // Convert data to JSON with pretty formatting
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = fileName;
    a.click();

    window.URL.revokeObjectURL(url); // Clean up the object URL
  }
  }

