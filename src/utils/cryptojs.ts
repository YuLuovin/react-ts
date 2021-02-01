import CryptoJS from 'crypto-js';

// DES加密
export const encryptByDESModeEBC = (message: string, key: string) => {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}