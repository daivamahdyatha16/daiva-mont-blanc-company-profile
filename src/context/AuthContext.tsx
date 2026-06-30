import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: User | null;
  register: (user: User) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] =
    useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem(
      "currentUser"
    );

    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const register = (user: User) => {
    const users =
      JSON.parse(localStorage.getItem("users") || "[]");

    users.push(user);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
  };

  const login = (
    email: string,
    password: string
  ) => {
    const users =
      JSON.parse(localStorage.getItem("users") || "[]");

    const found = users.find(
      (u: User) =>
        u.email === email &&
        u.password === password
    );

    if (found) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(found)
      );

      setCurrentUser(found);

      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
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