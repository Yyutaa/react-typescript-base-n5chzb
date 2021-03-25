import React, { useState, useEffect, useCallback, useRef } from "react";

const App = () => {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const getUser = async () => {
      const user = await getUser();
      setUser(getUser);
    };
    getUser();
  }, []);

  return <button>user</button>;
};

export default App;
