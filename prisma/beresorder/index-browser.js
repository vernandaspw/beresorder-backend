
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  google_id: 'google_id',
  nama: 'nama',
  email: 'email',
  phone: 'phone',
  password: 'password',
  pass_fail: 'pass_fail',
  pass_fail_at: 'pass_fail_at',
  role: 'role',
  isaktif: 'isaktif',
  otp: 'otp',
  otp_resend_at: 'otp_resend_at',
  otp_expired_at: 'otp_expired_at',
  otp_fail: 'otp_fail',
  otp_fail_at: 'otp_fail_at',
  token: 'token',
  tokenRefresh: 'tokenRefresh',
  created_at: 'created_at'
};

exports.Prisma.IconScalarFieldEnum = {
  id: 'id',
  img: 'img',
  deleted_at: 'deleted_at'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  outlet_id: 'outlet_id',
  nama: 'nama',
  no_meja: 'no_meja',
  tipe_pemesanan: 'tipe_pemesanan',
  tipe_bayar: 'tipe_bayar',
  tipe_pelayanan: 'tipe_pelayanan',
  perusahaan_pembayaran_id: 'perusahaan_pembayaran_id',
  perusahaan_delivery_id: 'perusahaan_delivery_id',
  subtotal: 'subtotal',
  diskon_persen: 'diskon_persen',
  diskon: 'diskon',
  ongkir: 'ongkir',
  dpp: 'dpp',
  ppn: 'ppn',
  service_charge: 'service_charge',
  total_bayar: 'total_bayar',
  status_bayar: 'status_bayar',
  status: 'status',
  byUser: 'byUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Order_produkScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  outlet_id: 'outlet_id',
  produk_id: 'produk_id',
  harga: 'harga',
  byUser: 'byUser',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OutletScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  nama: 'nama',
  alamat: 'alamat',
  telp: 'telp',
  isaktif: 'isaktif',
  byUser: 'byUser',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Outlet_fasilitasScalarFieldEnum = {
  id: 'id',
  outlet_id: 'outlet_id',
  nama: 'nama',
  keterangan: 'keterangan',
  img: 'img',
  created_at: 'created_at'
};

exports.Prisma.Outlet_jam_operasionalScalarFieldEnum = {
  id: 'id',
  outlet_id: 'outlet_id',
  hari: 'hari',
  jam_buka: 'jam_buka',
  jam_tutup: 'jam_tutup',
  istutup: 'istutup'
};

exports.Prisma.Outlet_userScalarFieldEnum = {
  id: 'id',
  outlet_id: 'outlet_id',
  user_id: 'user_id',
  isaktif: 'isaktif',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PerusahaanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  alamat: 'alamat',
  telp: 'telp',
  logo: 'logo',
  cover: 'cover',
  pph: 'pph',
  tipe_pemesanan: 'tipe_pemesanan',
  tipe_bayar: 'tipe_bayar',
  tipe_pelayanan: 'tipe_pelayanan',
  premium_expired_at: 'premium_expired_at',
  isaktif: 'isaktif',
  created_at: 'created_at',
  byUser: 'byUser'
};

exports.Prisma.Perusahaan_deliveryScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  icon_id: 'icon_id',
  nama: 'nama',
  deleted_at: 'deleted_at'
};

exports.Prisma.Perusahaan_pembayaranScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  icon_id: 'icon_id',
  nama: 'nama',
  biaya: 'biaya',
  deleted_at: 'deleted_at'
};

exports.Prisma.Perusahaan_userScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  user_id: 'user_id',
  role: 'role',
  isaktif: 'isaktif',
  created_at: 'created_at'
};

exports.Prisma.ProdukScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  nama: 'nama',
  keterangan: 'keterangan',
  isaktif: 'isaktif',
  byUser: 'byUser',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Produk_kategoriScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  nama: 'nama',
  deleted_at: 'deleted_at'
};

exports.Prisma.Produk_outletScalarFieldEnum = {
  id: 'id',
  outlet_id: 'outlet_id',
  produk_id: 'produk_id',
  harga: 'harga',
  tersedia: 'tersedia',
  byUser: 'byUser'
};

exports.Prisma.Produk_tambahanScalarFieldEnum = {
  id: 'id',
  produk_id: 'produk_id',
  produk_outlet_id: 'produk_outlet_id',
  nama: 'nama',
  wajibPilih: 'wajibPilih',
  pilihSatu: 'pilihSatu',
  deleted_at: 'deleted_at'
};

exports.Prisma.Produk_tambahan_itemsScalarFieldEnum = {
  id: 'id',
  produk_tambahan_id: 'produk_tambahan_id',
  nama: 'nama',
  harga: 'harga',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Saldo_kreditScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  tipe: 'tipe',
  nominal: 'nominal',
  keterangan: 'keterangan',
  order_id: 'order_id',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Saldo_topupScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  nominal: 'nominal',
  fee: 'fee',
  ppn: 'ppn',
  total_bayar: 'total_bayar',
  status: 'status',
  keterangan: 'keterangan',
  byUser: 'byUser',
  byAdmin: 'byAdmin',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.TransaksiScalarFieldEnum = {
  id: 'id',
  perusahaan_id: 'perusahaan_id',
  outlet_id: 'outlet_id',
  perusahaan_pembayaran_id: 'perusahaan_pembayaran_id',
  order_id: 'order_id',
  tipe: 'tipe',
  transaksi_kategori_id: 'transaksi_kategori_id',
  nominal: 'nominal',
  keterangan: 'keterangan',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  byUser: 'byUser'
};

exports.Prisma.Transaksi_kategoriScalarFieldEnum = {
  id: 'id',
  tipe: 'tipe',
  nama: 'nama',
  perushaan_id: 'perushaan_id',
  deleted_at: 'deleted_at',
  byUser: 'byUser'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  img: 'img',
  telp: 'telp',
  email: 'email',
  password: 'password',
  isaktif: 'isaktif',
  otp: 'otp',
  otp_expired_at: 'otp_expired_at',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.order_status_bayar = exports.$Enums.order_status_bayar = {
  belum_bayar: 'belum_bayar',
  lunas: 'lunas'
};

exports.order_status = exports.$Enums.order_status = {
  pesanan_baru: 'pesanan_baru',
  pesanan_berjalan: 'pesanan_berjalan',
  pesanan_selesai: 'pesanan_selesai'
};

exports.perusahaan_user_role = exports.$Enums.perusahaan_user_role = {
  pemilik: 'pemilik',
  admin: 'admin',
  kasir: 'kasir',
  dapur: 'dapur'
};

exports.saldo_kredit_tipe = exports.$Enums.saldo_kredit_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.saldo_kredit_keterangan = exports.$Enums.saldo_kredit_keterangan = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.saldo_topup_status = exports.$Enums.saldo_topup_status = {
  pending: 'pending',
  success: 'success',
  failed: 'failed'
};

exports.transaksi_tipe = exports.$Enums.transaksi_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.transaksi_kategori_tipe = exports.$Enums.transaksi_kategori_tipe = {
  masuk: 'masuk',
  keluar: 'keluar'
};

exports.Prisma.ModelName = {
  admin: 'admin',
  icon: 'icon',
  order: 'order',
  order_produk: 'order_produk',
  outlet: 'outlet',
  outlet_fasilitas: 'outlet_fasilitas',
  outlet_jam_operasional: 'outlet_jam_operasional',
  outlet_user: 'outlet_user',
  perusahaan: 'perusahaan',
  perusahaan_delivery: 'perusahaan_delivery',
  perusahaan_pembayaran: 'perusahaan_pembayaran',
  perusahaan_user: 'perusahaan_user',
  produk: 'produk',
  produk_kategori: 'produk_kategori',
  produk_outlet: 'produk_outlet',
  produk_tambahan: 'produk_tambahan',
  produk_tambahan_items: 'produk_tambahan_items',
  saldo_kredit: 'saldo_kredit',
  saldo_topup: 'saldo_topup',
  transaksi: 'transaksi',
  transaksi_kategori: 'transaksi_kategori',
  user: 'user'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
