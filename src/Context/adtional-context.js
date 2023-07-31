import { createContext } from "react";

const AdditionalContext = createContext({
    food: 0,
    transport: 0,
    setFood: () => {},
    setTransport: () => {},
    paymentsMethod: '',
  });
  
export default AdditionalContext;