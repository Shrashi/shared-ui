import  { useState } from "react";
import { Button, Input } from "@shared-ui/elements";

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 12, width: 320 }}>
      <label>
        <div style={{ marginBottom: 6 }}>Email</div>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <div style={{ marginBottom: 6 }}>Password</div>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <Button type="submit">Sign in</Button>
    </form>
  );
}
