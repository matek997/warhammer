import { ProfessionBuilder } from "../misc/ProfessionBuilder";
import { Api } from "./Api";
import { CurrentUser } from "./User";

export class DotnetApi extends Api {
  constructor(config: string) {
    super("http://localhost:8000");
  }
  async signin(email: string, password: string): Promise<boolean> {

    const response = await fetch('http://localhost:8000/User/Signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "text/plain"
      },
      body: JSON.stringify({
        email,
        password
      }),
    });//.then(res => res.json().then(console.log))
    const body: any = await response.json();
    console.log(body);
    if (typeof body === 'object' && !body.errorCode) {
      const { token, email } = body;
      this._user = new CurrentUser(email, token, {});
      return true;
    }
    return false;
  }
  async signout(): Promise<boolean> {
    if (this.user) this.user.token = "";
    return true;
  }

  async signup(_email: string, password: string): Promise<boolean> {
    const response = await fetch('http://localhost:8000/User/Signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "text/plain"
      },
      body: JSON.stringify({
        email: _email,
        password
      }),
    });
    const body: any = await response.json();

    console.log(body);
    if (typeof body === 'object' && !body.errorCode) {
      const { token, email } = body;
      this._user = new CurrentUser(email, token, {});
      return true;
    }
    return false;
  }

  async isSignedin(): Promise<boolean> {
    return new Promise((resolve) => {
      fetch(this.getEndpointUrl('User/SignedIn'), {
        method: 'POST',
        headers: this.getHeaders(),
      })
        .then((res) => resolve(res.status === 200))
        .catch(() => resolve(false));
    });
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
