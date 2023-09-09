'use client';

import { useEffect } from "react";

import useAuth from "@/stores/auth";

const Stores = ({ isAuth }) => {
  const { setIsLogged } = useAuth();

  useEffect(() => {
    setIsLogged(isAuth);
  }, [isAuth, setIsLogged]);

  return null;
}

export default Stores;
