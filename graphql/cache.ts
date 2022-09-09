import { InMemoryCache, Reference, makeVar } from '@apollo/client';
import UserInterface from '../interfaces/UserInterface';
import { persistCache } from "apollo-cache-persist";
import AsyncLocalStorage from '@createnextapp/async-local-storage'


export const setIsLogin = makeVar<boolean>(!!AsyncLocalStorage?.getItem('accessToken'));

interface AuthDataInterface {
    user: UserInterface
    token: string
}
// Initializes to an empty array
export const setAuthData = makeVar<AuthDataInterface | {}>({});

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return setIsLogin();
            } 
          },
          authData: {
            read() {
              return setAuthData();
            } 
          },
          launches: {
            // ...field policy definitions...
          }
        }
      }
    },
});

if (typeof window !== 'undefined') {
  persistCache({
      cache,
      storage: AsyncLocalStorage,
      trigger: 'write',
    });
}
