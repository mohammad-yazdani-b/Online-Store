import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const schema = yup.object().shape({
    username: yup.string().required("این فیلد اجباری است"),
    password: yup
      .string()
      .min(8, "رمز باید حداقل 8 کاراکتر باشد")
      .required("این فیلد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/login", data);
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "خطا در ورود");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <input
          type="text"
          id="username"
          placeholder=" "
          autocomplete="off"
          {...register("username")}
        />
        <label htmlFor="username">username</label>
      </div>
      <p className="error">{errors.username?.message}</p>
      <div className="input-group">
        <input
          type="password"
          id="pass"
          placeholder=" "
          required
          autocomplete="off"
          {...register("password")}
        />
        <label htmlFor="pass">password</label>
      </div>
      <p className="error">{errors.password?.message}</p>
      <input type="submit" value="login" />
    </form>
  );
};

export default Loginform;
