import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/combineReducers";
import { useEffect } from "react";

export const withPrivateRoute = (WrappedComponent: React.FC) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        // Redirect to login or unauthorized page if not logged in
        router.push("/auth");
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      // Prevent rendering the wrapped component if not logged in
      return null;
    }

    // If authenticated, render the component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
