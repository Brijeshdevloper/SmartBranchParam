import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { EncryptionComponent } from "./encryption/encryption.component";
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js'; // Import CryptoJS

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'param';
  currentParams: any = {};
  inputText: string = ''; // To capture input from the form
  encryptedText: string = ''; // To hold encrypted data
  decryptedText: string = ''; // To hold decrypted data
  secretKey: string = 'SmartBranchDae';
  arr: { [key: string]: string }[] = []; // Array to store encrypted values

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscribe to query params changes
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentParams = params;
      console.log('Current Params:', this.currentParams); // Debugging output
    });
  }

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
 


  // // Method to handle form submission and save JSON
  // onSubmit() {
  //   const array = [
  //     "2237",
  //     "2238",
  //     "2239",
  //     "2240",
  //     "2241",
  //     "2242",
  //     "2243",
  //     "2244",
  //     "2245",
  //     "2246",
  //     "2247",
  //     "2248",
  //     "2249",
  //     "2250",
  //     "2251",
  //     "2252",
  //     "2253",
  //     "2254",
  //     "2255",
  //     "2256",
  //     "2257",
  //     "2258",
  //     "2259",
  //     "2260",
  //     "2261",
  //     "2262",
  //     "2263",
  //     "2264",
  //     "2265",
  //     "2266",
  //     "2267",
  //     "2268",
  //     "2269",
  //     "2270",
  //     "2271",
  //     "2272",
  //     "2273",
  //     "2274",
  //     "2275",
  //     "2276",
  //     "2277",
  //     "2278",
  //     "2279",
  //     "2280",
  //     "2281",
  //     "2282",
  //     "2283",
  //     "2284",
  //     "2285",
  //     "2286",
  //     "2287",
  //     "2288",
  //     "2289",
  //     "2290",
  //     "2291",
  //     "2292",
  //     "2293",
  //     "2294",
  //     "2295",
  //     "2296",
  //     "2297",
  //     "2298",
  //     "2299",
  //     "2300",
  //     "2301",
  //     "2302",
  //     "2303",
  //     "2304",
  //     "2305",
  //     "2306",
  //     "2307",
  //     "2308",
  //     "2309",
  //     "2310",
  //     "2311",
  //     "2312",
  //     "2313",
  //     "2314",
  //     "2315",
  //     "2316",
  //     "2317",
  //     "2318",
  //     "2319",
  //     "2320",
  //     "2321",
  //     "2322",
  //     "2323",
  //     "2324",
  //     "2325",
  //     "2326",
  //     "2327",
  //     "2328",
  //     "2329",
  //     "2330",
  //     "2331",
  //     "2332",
  //     "2333",
  //     "2334",
  //     "2335",
  //     "2336",
  //     "2337",
  //     "2338",
  //     "2339",
  //     "2340",
  //     "2341",
  //     "2342",
  //     "2343",
  //     "2344",
  //     "2345",
  //     "2346",
  //     "2347",
  //     "2348",
  //     "2349",
  //     "2350",
  //     "2351",
  //     "2352",
  //     "2353",
  //     "2354",
  //     "2355",
  //     "2356",
  //     "2357",
  //     "2358",
  //     "2359",
  //     "2360",
  //     "2361",
  //     "2362",
  //     "2363",
  //     "2364",
  //     "2365",
  //     "2366",
  //     "2367",
  //     "2368",
  //     "2369",
  //     "2370",
  //     "2371",
  //     "2372",
  //     "2373",
  //     "2374",
  //     "2375",
  //     "2376",
  //     "2377",
  //     "2378",
  //     "2379",
  //     "2380",
  //     "2381",
  //     "2382",
  //     "2383",
  //     "2384",
  //     "2385",
  //     "2386",
  //     "2387",
  //     "2388",
  //     "2389",
  //     "2390",
  //     "2391",
  //     "2392",
  //     "2393",
  //     "2394",
  //     "2395",
  //     "2396",
  //     "2397",
  //     "2398",
  //     "2399",
  //     "2400",
  //     "2401",
  //     "2402",
  //     "2403",
  //     "2404",
  //     "2405",
  //     "2406",
  //     "2407",
  //     "2408",
  //     "2409",
  //     "2410",
  //     "2411",
  //     "2412",
  //     "2413",
  //     "2414",
  //     "2415",
  //     "2416",
  //     "2417",
  //     "2418",
  //     "2419",
  //     "2420",
  //     "2421",
  //     "2422",
  //     "2423",
  //     "2424",
  //     "2425",
  //     "2426",
  //     "2427",
  //     "2428",
  //     "2429",
  //     "2430",
  //     "2431",
  //     "2432"
  //     ];

  //   array.forEach((value) => {
  //     let validUrl = false; // Flag to check if the condition is met
  //     let encryptedUrl = '';

  //     while (!validUrl) {
  //       // Encrypt the value
  //       const encrypt = CryptoJS.AES.encrypt(value, this.secretKey).toString();
  //       const encoded = encodeURIComponent(encrypt);

  //       // Check the condition: only the third last character should be '%'
  //       const thirdLastIndex = encoded.length - 3;
  //       const hasOnlyOnePercent =
  //         encoded.split('%').length - 1 === 1 && encoded[thirdLastIndex] === '%';

  //       if (hasOnlyOnePercent) {
  //         validUrl = true; // Condition met
  //         encryptedUrl = encoded;
  //       }
  //     }

  //     // Store the final valid URL in the array
  //     this.arr.push({ [value]: encryptedUrl });
  //   });

  //   // Call the method to save JSON
  //   this.saveAsJsonFile(this.arr, 'encrypted-data.json');
  // }

  // // Method to save JSON file locally
  // saveAsJsonFile(data: any, fileName: string) {
  //   const json = JSON.stringify(data, null, 2); // Convert data to JSON with pretty formatting
  //   const blob = new Blob([json], { type: 'application/json' });
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement('a');

  //   a.href = url;
  //   a.download = fileName;
  //   a.click();

  //   window.URL.revokeObjectURL(url); // Clean up the object URL
  // }
}
