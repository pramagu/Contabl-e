export class UserDto {
  username?: string;
  avatar?: string;
  fullName?: string;
  email?: string;
  roles?: Array<string>;

  constructor() {
    this.username = '';
    this.avatar = '';
    this.fullName = '';
    this.email = '';
    this.roles = [];
  }
}
