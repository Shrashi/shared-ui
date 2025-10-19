
import { LoginForm } from "./LoginForm";

export default { title: "Auth/LoginForm", component: LoginForm };

export const Basic = {
  args: {
    onSubmit: (data) => alert(JSON.stringify(data, null, 2))
  }
};
