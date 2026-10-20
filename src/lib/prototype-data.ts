// Data mockup & tipe untuk prototype Document Digital
// Aplikasi Pengelolaan Surat Jalan

export type ScreenId =
  | "cover"
  | "01-login"
  | "02-dashboard"
  | "03-pencarian"
  | "04-filter"
  | "05-daftar-dokumen"
  | "06-detail-dokumen"
  | "07-lihat-bukti"
  | "08-audit-trail"
  | "09-lacak-pengiriman"
  | "10-verifikasi-penerimaan"
  | "11-verifikasi-berhasil"
  | "12-buat-surat-jalan"
  | "13-surat-terkirim"
  | "14-notifikasi"
  | "15-profil";

export interface ScreenMeta {
  id: ScreenId;
  number: number; // 1..15
  label: string; // "01"
  title: string; // "Login"
  description: string;
  hci: string; // prinsip HCI
}

export const SCREENS: ScreenMeta[] = [
  { id: "01-login", number: 1, label: "01", title: "Login", description: "Pengguna masuk dengan akun pegawai. Satu tombol utama besar agar mudah dijangkau.", hci: "Fitts: tombol Masuk lebar penuh" },
  { id: "02-dashboard", number: 2, label: "02", title: "Dashboard", description: "Pusat kendali: cari surat, filter, pantau ringkasan status, dan lihat riwayat dokumen.", hci: "Fitts: search bar & tombol + besar · Hick: navbar 4 fungsi inti" },
  { id: "03-pencarian", number: 3, label: "03", title: "Pencarian", description: "Hasil muncul saat pengguna mengetik nomor surat, nama penerima, atau tujuan.", hci: "Hick: hanya hasil relevan yang ditampilkan" },
  { id: "04-filter", number: 4, label: "04", title: "Filter & Urutkan", description: "Filter dan sort dikelompokkan dalam satu bottom sheet agar keputusan lebih sederhana.", hci: "Hick: pilihan dikelompokkan per kategori" },
  { id: "05-daftar-dokumen", number: 5, label: "05", title: "Daftar Dokumen", description: "Seluruh surat jalan dengan tab status dan filter aktif yang terlihat jelas.", hci: "Hick: tab status membatasi daftar yang tampil" },
  { id: "06-detail-dokumen", number: 6, label: "06", title: "Detail Dokumen", description: "Nomor, status, dan penerima menonjol. Area bukti penerimaan dibuat dominan.", hci: "Fitts: tombol Verifikasi besar · tombol kembali tidak jadi fokus" },
  { id: "07-lihat-bukti", number: 7, label: "07", title: "Lihat Bukti", description: "Bukti penerimaan ditampilkan layar penuh untuk diperiksa dengan detail.", hci: "Fitts: kontrol berada di pojok dan bawah layar" },
  { id: "08-audit-trail", number: 8, label: "08", title: "Audit Trail", description: "Jejak setiap aktivitas: siapa melakukan apa dan kapan, untuk transparansi.", hci: "Hick: filter kategori aktivitas" },
  { id: "09-lacak-pengiriman", number: 9, label: "09", title: "Lacak Pengiriman", description: "Posisi armada real-time, estimasi tiba, dan kontak supir.", hci: "Fitts: tombol telepon supir besar di jangkauan jempol" },
  { id: "10-verifikasi-penerimaan", number: 10, label: "10", title: "Verifikasi Penerimaan", description: "Checklist kondisi barang, foto bukti, dan tanda tangan penerima.", hci: "Hick: 3 pemeriksaan singkat, 1 aksi utama" },
  { id: "11-verifikasi-berhasil", number: 11, label: "11", title: "Verifikasi Berhasil", description: "Konfirmasi bahwa penerimaan telah diverifikasi dan tercatat.", hci: "Umpan balik jelas setelah aksi penting" },
  { id: "12-buat-surat-jalan", number: 12, label: "12", title: "Buat Surat Jalan", description: "Form singkat untuk membuat surat jalan digital beserta lampiran.", hci: "Hick: field dikelompokkan menjadi 3 bagian" },
  { id: "13-surat-terkirim", number: 13, label: "13", title: "Surat Terkirim", description: "Nomor dokumen dibuat otomatis, lengkap dengan QR untuk serah terima.", hci: "Umpan balik jelas setelah aksi penting" },
  { id: "14-notifikasi", number: 14, label: "14", title: "Notifikasi", description: "Pembaruan status surat secara langsung; yang belum dibaca ditandai.", hci: "Hick: dikelompokkan per hari" },
  { id: "15-profil", number: 15, label: "15", title: "Profil", description: "Data pengguna, ringkasan kinerja, dan pengaturan akun.", hci: "Fitts: tombol Keluar terpisah & berwarna beda" },
];

export type DocStatus = "proses" | "selesai" | "draf" | "pending";

export interface DocItem {
  id: string;
  nomor: string;
  penerima: string;
  tujuan: string;
  tanggal: string;
  status: DocStatus;
  jumlahBarang: number;
  supir: string;
  // ringkasan untuk audit trail
  aktivitas: { waktu: string; aksi: string; pelaku: string; kategori: string }[];
}

export const STATUS_LABEL: Record<DocStatus, string> = {
  proses: "Proses",
  selesai: "Selesai",
  draf: "Draf",
  pending: "Menunggu",
};

export const STATUS_BADGE: Record<DocStatus, string> = {
  proses: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  selesai: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  draf: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  pending: "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
};

export const STATUS_DOT: Record<DocStatus, string> = {
  proses: "bg-amber-500",
  selesai: "bg-emerald-500",
  draf: "bg-slate-400",
  pending: "bg-orange-500",
};

export const DOCUMENTS: DocItem[] = [
  {
    id: "0142",
    nomor: "SJ/2025/09/0142",
    penerima: "PT Sumber Makmur Jaya",
    tujuan: "Gudang B, Semarang",
    tanggal: "Okt 18, 2025",
    status: "proses",
    jumlahBarang: 24,
    supir: "Budi Santoso",
    aktivitas: [
      { waktu: "09:42", aksi: "Surat jalan dibuat", pelaku: "Ahbas T.", kategori: "Dibuat" },
      { waktu: "10:15", aksi: "Dokumen dikirim ke gudang", pelaku: "Sistem", kategori: "Kirim" },
      { waktu: "13:28", aksi: "Armada berangkat", pelaku: "Budi Santoso", kategori: "Armada" },
      { waktu: "15:10", aksi: "Tiba di lokasi penerima", pelaku: "Budi Santoso", kategori: "Armada" },
      { waktu: "15:42", aksi: "Menunggu verifikasi penerimaan", pelaku: "Sistem", kategori: "Verifikasi" },
    ],
  },
  {
    id: "0141",
    nomor: "SJ/2025/09/0141",
    penerima: "CV Berkah Abadi",
    tujuan: "Warehouse C, Solo",
    tanggal: "Okt 17, 2025",
    status: "selesai",
    jumlahBarang: 18,
    supir: "Agus Wahyudi",
    aktivitas: [
      { waktu: "08:00", aksi: "Surat jalan dibuat", pelaku: "Agung N.", kategori: "Dibuat" },
      { waktu: "12:45", aksi: "Tiba di lokasi", pelaku: "Agus Wahyudi", kategori: "Armada" },
      { waktu: "13:10", aksi: "Verifikasi penerimaan selesai", pelaku: "Anisa W.", kategori: "Verifikasi" },
    ],
  },
  {
    id: "0140",
    nomor: "SJ/2025/09/0140",
    penerima: "PT Nusantara Logistik",
    tujuan: "Pelabuhan Tanjung Mas",
    tanggal: "Okt 17, 2025",
    status: "selesai",
    jumlahBarang: 52,
    supir: "Budi Santoso",
    aktivitas: [
      { waktu: "07:30", aksi: "Surat jalan dibuat", pelaku: "Ahbas T.", kategori: "Dibuat" },
      { waktu: "11:20", aksi: "Verifikasi penerimaan selesai", pelaku: "Penerima", kategori: "Verifikasi" },
    ],
  },
  {
    id: "0139",
    nomor: "SJ/2025/09/0139",
    penerima: "Toko Maju Bersama",
    tujuan: "Gudang A, Semarang",
    tanggal: "Okt 16, 2025",
    status: "proses",
    jumlahBarang: 12,
    supir: "Slamet Riyadi",
    aktivitas: [
      { waktu: "14:20", aksi: "Surat jalan dibuat", pelaku: "Alfatih A.", kategori: "Dibuat" },
      { waktu: "15:30", aksi: "Armada berangkat", pelaku: "Slamet Riyadi", kategori: "Armada" },
    ],
  },
  {
    id: "0138",
    nomor: "SJ/2025/09/0138",
    penerima: "PT Karya Mandiri",
    tujuan: "Site Project, Kendal",
    tanggal: "Okt 16, 2025",
    status: "pending",
    jumlahBarang: 8,
    supir: "Belum ditugaskan",
    aktivitas: [
      { waktu: "16:00", aksi: "Surat jalan dibuat (draft)", pelaku: "Fajar R.", kategori: "Dibuat" },
    ],
  },
  {
    id: "0137",
    nomor: "SJ/2025/09/0137",
    penerima: "UD Sentosa Jaya",
    tujuan: "Marketplace Hub, Demak",
    tanggal: "Okt 15, 2025",
    status: "draf",
    jumlahBarang: 5,
    supir: "-",
    aktivitas: [
      { waktu: "10:00", aksi: "Draft disimpan", pelaku: "Ahbas T.", kategori: "Dibuat" },
    ],
  },
];

export const NOTIFICATIONS = [
  { id: "n1", docId: "0142", title: "Verifikasi menunggu", body: "SJ/2025/09/0142 tiba di lokasi penerima.", time: "13:30", group: "Hari ini", unread: true, kategori: "Verifikasi" },
  { id: "n2", docId: "0142", title: "Armada tiba", body: "Pengiriman SJ/2025/09/0142 tiba di lokasi.", time: "12:05", group: "Hari ini", unread: true, kategori: "Armada" },
  { id: "n3", docId: "0139", title: "Armada berangkat", body: "SJ/2025/09/0139 menuju Gudang A, Semarang.", time: "08:14", group: "Hari ini", unread: false, kategori: "Armada" },
  { id: "n4", docId: "0141", title: "Verifikasi berhasil", body: "Penerimaan SJ/2025/09/0141 telah dikonfirmasi.", time: "Kemarin 13:10", group: "Kemarin", unread: false, kategori: "Verifikasi" },
  { id: "n5", docId: "0140", title: "Verifikasi berhasil", body: "Penerimaan SJ/2025/09/0140 telah dikonfirmasi.", time: "Kemarin 11:20", group: "Kemarin", unread: false, kategori: "Verifikasi" },
  { id: "n6", docId: "0137", title: "Draft disimpan", body: "Draft SJ/2025/09/0137 tersimpan di perangkat.", time: "Kemarin 10:00", group: "Kemarin", unread: false, kategori: "Dibuat" },
];

export const USER = {
  nama: "Ahbas Tuhuteru",
  nip: "26120400012",
  peran: "Admin Logistik · Ketua",
  avatarInisial: "AT",
  email: "ahbas.t@documentdigital.id",
  telepon: "+62 812-3456-7890",
  unit: "PT Document Digital Indonesia",
  bergabung: "Jan 2024",
  ringkasan: {
    total: 184,
    proses: 6,
    selesai: 168,
    verifikasi: 96,
  },
  pengaturan: [
    { label: "Notifikasi Push", value: "Aktif" },
    { label: "Verifikasi dengan Tanda Tangan", value: "Wajib" },
    { label: "Sinkron Otomatis", value: "Setiap 5 menit" },
    { label: "Bahasa", value: "Bahasa Indonesia" },
  ],
};

export const TIM_MEMBERS = [
  { nama: "Ahbas Tuhuteru", nim: "26120400012", peran: "Ketua" },
  { nama: "Agung Nugraha", nim: "26140400002", peran: "Anggota" },
  { nama: "Anisa Wulandari", nim: "26120400008", peran: "Anggota" },
  { nama: "Alfatih Aziz", nim: "26120400009", peran: "Anggota" },
  { nama: "Fajar Raihan", nim: "26120400007", peran: "Anggota" },
];

export const FILTER_STATUS_OPTIONS = [
  { id: "all", label: "Semua Status" },
  { id: "proses", label: "Proses" },
  { id: "selesai", label: "Selesai" },
  { id: "pending", label: "Menunggu" },
  { id: "draf", label: "Draf" },
];

export const FILTER_TANGGAL_OPTIONS = [
  { id: "7", label: "7 Hari Terakhir" },
  { id: "30", label: "30 Hari Terakhir" },
  { id: "bulan", label: "Bulan Ini" },
  { id: "custom", label: "Rentang Kustom" },
];

export const URUTKAN_OPTIONS = [
  { id: "terbaru", label: "Terbaru" },
  { id: "terlama", label: "Terlama" },
  { id: "penerima", label: "Nama Penerima" },
  { id: "tujuan", label: "Tujuan" },
];
