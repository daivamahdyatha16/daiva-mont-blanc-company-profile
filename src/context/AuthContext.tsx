import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import Backendless from "../lib/backendless";

export type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  currentUser: User | null;

  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<boolean>;

  login: (
    email: string,
    password: string,
  ) => Promise<User | false>;

  logout: () => Promise<void>;
};

const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType,
  );

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] =
    useState<User | null>(null);

  // cek login saat refresh
  useEffect(() => {
    const loadUser = async () => {
      try {
        const user =
          (await Backendless.UserService.getCurrentUser()) as any;

        if (user) {
          setCurrentUser({
            name: user.name ?? "",
            email: user.email ?? "",
          });
        }
      } catch {
        setCurrentUser(null);
      }
    };

    loadUser();
  }, []);

  // REGISTER
  const register = async (
    name: string,
    email: string,
    password: string,
  ) => {
    try {
      const user =
        new Backendless.User() as any;

      user.name = name;
      user.email = email;
      user.password = password;

      await Backendless.UserService.register(
        user,
      );

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  // LOGIN
  const login = async (
    email: string,
    password: string,
  ): Promise<User | false> => {
    try {
      const user =
        (await Backendless.UserService.login(
          email,
          password,
          true,
        )) as any;

      const loggedUser = {
        name: user.name ?? "",
        email: user.email ?? "",
      };

      setCurrentUser(loggedUser);

      return loggedUser;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  // LOGOUT
  const logout = async () => {
    try {
      await Backendless.UserService.logout();

      setCurrentUser(null);

      alert("Logged out successfully!");

      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);