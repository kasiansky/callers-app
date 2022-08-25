import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSortedCustomersWithTotal } from "../helpers";
import CustomersGrid from "./CustomersGrid";

export const CustomerList = () => {
  const customers = useSelector((state) => state.customer.customers);
  const calls = useSelector((state) => state.call.calls);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!!customers && calls) {
      setIsLoading(false);
    } else {
    }
  }, [customers, calls]);
  if (isLoading) return <div>Loading</div>;

  const customersToRender = getSortedCustomersWithTotal(customers, calls);

  return (
    <div>
      <CustomersGrid customers={customersToRender} />
    </div>
  );
};
