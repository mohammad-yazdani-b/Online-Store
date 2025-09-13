import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Loginform = () => {
  const schema = yup.object().shape();

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {};

  return (
    <form>
      <div class="input-group">
        <input
          type="text"
          id="username"
          name="username"
          placeholder=" "
          autocomplete="off"
        />
        <label for="username">username</label>
      </div>
      <p className="error">این ارور هست</p>
      <div class="input-group">
        <input
          type="password"
          id="pass"
          name="password"
          placeholder=" "
          required
          autocomplete="off"
        />
        <label for="pass">password</label>
      </div>
      <p className="error">این ارور هست</p>
      <input type="submit" value="login" />
    </form>
  );
};

export default Loginform;
