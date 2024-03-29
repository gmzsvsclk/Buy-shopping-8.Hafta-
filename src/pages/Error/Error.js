import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();

  // Rendering to hamepage after 3 sec
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Bir yerde sorun var!</h1>
      <p>Anasayfaya Yönlendiriliyor...</p>
    </div>
  );
}
