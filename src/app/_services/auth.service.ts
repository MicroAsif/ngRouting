import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async login(postData) {
    // login actions
    const loginApiResponce = {
      name:  postData.email,
      uid: 1,
      token: '2323523523DFSWERWERWER'
    };
    await sessionStorage.setItem('userData', JSON.stringify(loginApiResponce));
    return true;
  }

  public async getUserInfo(){
    var user = await sessionStorage.getItem("userData");
    return JSON.parse(user);
  }


  public signup(postData) {
    // login actions

  }

  public async logout() {
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

}
