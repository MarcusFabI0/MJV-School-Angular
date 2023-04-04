// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
// export type User = {
//     name: string;
//     email?: string;
//     registered: boolean;
// }

type UnregisteredUser = {
    name: string;
    register: false;
  };
  
type RegisteredUser = {
    name: string;
    email: string;
    register: true;
  };
  
  type User = UnregisteredUser | RegisteredUser;