import { FormEvent, useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setOk("");

    if (!email || !password) {
      setError("Write email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must have at least 6 characters.");
      return;
    }

    // Simulación de login correcto
    setOk("Login successful.");
  };

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>

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

        <button type="submit">Sign in</button>
        <button type="button" className="signUp-btn">
          Don't have an account? Sign up
        </button>
      </form>
    </main>
  );
}