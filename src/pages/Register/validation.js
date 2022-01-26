const rules = {
  full_name: {
    required: { value: true, message: "Nama lengkap harus diisi" },
    maxlength: { value: 500, message: "Maksimal 500 karakter" },
  },

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

  password_confirmation: {
    required: { value: true, message: "Konfirmasi Password harus diisi" },
  },
};

export { rules };
