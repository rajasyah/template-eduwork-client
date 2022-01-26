const rules = {
  email: {
    required: { value: true, message: "Email tidak boleh kosong" },
    maxLength: { value: 255, message: "Email maksimal 255 karakter" },
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "Email tidak valid",
    },
  },

  password: {
    required: { value: true, message: "Password tidak boleh kosong" },
    maxLength: { value: 255, message: "Password maksimal 255 karakter" },
  },
};

export { rules };
