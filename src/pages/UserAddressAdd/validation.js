const rules = {
  nama_alamat: {
    required: { value: true, message: "Nama alamat tidak boleh kosong" },
    maxLength: { value: 500, message: "Panjang alamat maksimal 500 karakter" },
    minLength: { value: 5, message: "Panjang alamat minimal 5 karakter" },
  },
  provinsi: {
    required: { value: true, message: "Provinsi tidak boleh kosong" },
  },
  kabupaten: {
    required: { value: true, message: "kabupaten tidak boleh kosong" },
  },
  kecamatan: {
    required: { value: true, message: "kecamatan tidak boleh kosong" },
  },
  kelurahan: {
    required: { value: true, message: "kelurahan tidak boleh kosong" },
  },
  detail_alamat: {
    required: { value: true, message: "Detail alamat harus diisi" },
    maxLength: { value: 1000, message: "Detail alamat maksimal 1000 karakter" },
  },
};

export { rules };
