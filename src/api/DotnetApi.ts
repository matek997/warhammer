import { ProfessionBuilder } from "../misc/ProfessionBuilder";
import { Api } from "./Api";
import { CurrentUser } from "./User";

export class DotnetApi extends Api {
  constructor(config: string) {
    super("http://localhost:8000");
  }
  async signin(email: string, password: string): Promise<boolean> {
    // return new CurrentUser('user@example.net', 'token');
    const response = await fetch(this.getEndpointUrl('User/Signin'), {
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
      const res = await fetch(this.getEndpointUrl('User/Signin'), {
        headers: this.getHeaders(),
      });
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }

  async getProfession(id: string | string[]) {
    const res = await fetch(this.getEndpointUrl('Profession/GetProfession'), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ professionId: id })
    });

    return await res.json();
  }

  async getProfessionList() {
    const res = await fetch(this.getEndpointUrl('Profession/GetProfessions'), {
      method: "GET"

    });

    return (await res.json()).map((el: string) => { return { id: el, label: el } })

  }
  private getHeaders() {
    return {
      Authority: `Bearer ${this.user?.token}`,
      "Content-Type": "application/json",
    };
  }
  private getEndpointUrl(endpoint: string) {
    return `${this.config}/${endpoint}`;
  }
}
