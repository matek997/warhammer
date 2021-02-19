import React from "react";

type Preferences = {
  language?: string;
};
type Profile = {
  name?: string;
};
export class User {
  protected _profile = { name: User.ANONYMOUS_NAME } as Profile;
  get profile() {
    return this._profile;
  }
  static readonly ANONYMOUS_TOKEN = "anonymous";
  static readonly ANONYMOUS_NAME = "Anonymous";
}

export class CurrentUser extends User {
  constructor(
    readonly email: string,
    public token: string,
    readonly preferences: Preferences = {}
  ) {
    super();
  }
  static getDefault() {
    return new CurrentUser(
      User.ANONYMOUS_NAME + "@example.net",
      User.ANONYMOUS_TOKEN,
      { language: "en" }
    );
  }
  setName(newName: string) {
    this._profile.name = newName;
  }
}

export const UserContext = React.createContext(({} as unknown) as User);
