import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWeb3 } from "./Web3Context";

// Define the type for the user context.
type UserContextType = {
  user: string | null;
};

// Create a context for user data.
const UserContext = createContext<UserContextType>({
  user: null,
});

// Custom hook for accessing user context data.
export const useUser = () => useContext(UserContext);

// Provider component that wraps parts of the app that need user context.
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Use the web3 context.
  const { web3 } = useWeb3();

  // Initialize user state to hold user's account information.
  const [user, setUser] = useState<string | null>(null);

  // Function to retrieve and set user's account.
  const fetchUserAccount = useCallback(async () => {
    // Use Web3 to get user's accounts.
    const accounts = await web3?.eth.getAccounts();

    // Update the user state with the first account (if available), otherwise set to null.
    setUser(accounts ? accounts[0] : null);
  }, [web3?.eth]);

  // Run fetchUserAccount function whenever the web3 instance changes.
  useEffect(() => {
    fetchUserAccount();
  }, [fetchUserAccount, web3]);

  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
