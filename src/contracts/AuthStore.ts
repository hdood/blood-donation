import type { Router } from "vue-router";

export default interface AuthStore {
	login(router: Router): any;
	register(router: Router): any;
	logout(router: Router): any;
	googleLogin(payload: any, router: Router): any;
	googleRegister(payload: any, router: Router): any;
	checkGoogleUser(payload: any, router: Router): any;
	saveCredential(payload: any): any;
}
