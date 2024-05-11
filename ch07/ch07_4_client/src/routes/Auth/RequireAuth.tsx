import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

type RequireAuthProps = {};

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ children }) => {
  const { jwt } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) navigate("/login"); // jwt 토큰이 없으므로 로그인 화면으로 이동
  }, [jwt, navigate]);

  return <>{children}</>; // 허가된 사용자: children이 element가 되도록 함
};
export default RequireAuth;
