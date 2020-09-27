import { observable, action } from "mobx";
import { createContext } from "react";
class UserStore {
  @observable name = "";
  @observable username = "";
  @observable users = [];

  @action
  setUser(users) {
    this.users = [...users];
  }
}

export const UserStoreContex = createContext(new UserStore());
