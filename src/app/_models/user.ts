export class User {
  username?: string;
  avatar?: string;
  fullName?: string;
  email?: string;
  roles?: Array<string>;
  token?: string;

  constructor() {
    this.username = '';
    this.avatar = '';
    this.fullName = '';
    this.email = '';
    this.roles = [];
    this.token = '';
  }
}
