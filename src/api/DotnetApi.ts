import { ProfessionBuilder } from "../misc/ProfessionBuilder";
import { Api } from "./Api";
import { CurrentUser } from "./User";
enum Actions {
  SIGNIN = "Login",
}
export class DotnetApi extends Api {
  constructor(config: string) {
    super("http://localhost:44342");
  }
  async signin(email: string, password: string): Promise<boolean> {
    // return new CurrentUser('user@example.net', 'token');
    const response = await fetch(this.getEndpointUrl(Actions.SIGNIN), {
      method: "POST",
      //  headers: this.getHeaders(),
      body: JSON.stringify({ email, password }),
    });
    const body: { token: string; email: string } = await response.json();
    if (typeof body === "object") {
      const { token, email } = body;
      this._user = new CurrentUser(token, email, {});
      return true;
    }
    return false;
  }
  async signout(): Promise<boolean> {
    if (this.user) this.user.token = "";
    return true;
  }

  async signup(email: string, password: string): Promise<boolean> {
    return true; //return new CurrentUser('user@example.net', 'token');
  }

  async isSignedin() {
    try {
      const res = await fetch(this.getEndpointUrl(Actions.SIGNIN), {
        headers: this.getHeaders(),
      });
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }

  async getProfession(id: string | string[]) {
    return new ProfessionBuilder().getEmpty();
  }

  async getProfessionList() {
    return [];
  }
  private getHeaders() {
    return {
      Authority: `Bearer ${this.user?.token}`,
      "Content-Type": "application/json",
    };
  }
  private getEndpointUrl(endpoint: Actions) {
    return `${this.config}/Users/${endpoint}`;
  }
}
