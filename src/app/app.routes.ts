import { Routes } from '@angular/router';
import { EncryptionComponent } from './encryption/encryption.component';
import { DecryptedurlComponent } from './decryptedurl/decryptedurl.component';

export const routes: Routes = [
    { path: '', component: EncryptionComponent }, // Default route
    { path: 'decrypt', component: DecryptedurlComponent }, 
];
