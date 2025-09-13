const Loginform = () => {
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
      <input type="submit" value="login" />
    </form>
  );
};

export default Loginform;
