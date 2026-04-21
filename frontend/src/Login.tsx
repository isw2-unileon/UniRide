import { FormEvent, useState } from "react";
import "./Login.css";

export default function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setOk("");

    if (!email || !password) {
      setError("Completa correo y contraseña.");
      return;
    }

    if (mode === "register" && !username.trim()) {
      setError("Completa usuario, correo y contraseña.");
      return;
    }

    if (!email.includes("@")) {
      setError("Correo no válido.");
      return;
    }

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setLoading(true);
    try {
      const endpoint = mode === "login" ? "/api/login" : "/api/register";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...(mode === "register" ? { username: username.trim() } : {}),
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setError(data.error ?? "No se pudo completar la solicitud.");
        return;
      }

      if (mode === "login") {
        setOk(data.message ?? "Login exitoso");
      } else {
        setOk(data.message ?? "Usuario registrado correctamente.");
        setMode("login");
      }

      setUsername("");
      setEmail("");
      setPassword("");
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
    setError("");
    setOk("");
    setPassword("");
  };

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>{mode === "login" ? "Iniciar sesión" : "Crear cuenta"}</h1>

        {mode === "register" && (
          <>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              id="username"
              type="text"
              placeholder="tu_usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="tuemail@uni.es"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="msg error">{error}</p>}
        {ok && <p className="msg ok">{ok}</p>}

        <button type="submit" disabled={loading}>
          {loading
            ? mode === "login"
              ? "Entrando..."
              : "Registrando..."
            : mode === "login"
              ? "Entrar"
              : "Registrarse"}
        </button>

        <p className="switch-auth">
          {mode === "login" ? "No tienes una cuenta?" : "Ya tienes una cuenta?"}
          <button type="button" className="switch-auth-btn" onClick={switchMode}>
            {mode === "login" ? "Crear una" : "Iniciar sesión"}
          </button>
        </p>
      </form>
    </main>
  );
}