import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

const NewsletterContext = createContext();

export function NewsletterProvider({ children }) {
  const [visible, setVisible] = useState(false);

  const openNewsletter = useCallback(() => {
    setVisible(true);
  }, []);

  const closeNewsletter = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <NewsletterContext.Provider
      value={{
        visible,
        openNewsletter,
        closeNewsletter,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
}

export const useNewsletter = () => useContext(NewsletterContext);