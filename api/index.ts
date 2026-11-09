// @ts-nocheck

// Pre-configure environment variables for Google Cloud DB & admin auth
process.env.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:AirnetAdmin123!@34.73.135.147:5432/airnet_db";
process.env.ADMIN_MASTER_PASSWORD = process.env.ADMIN_MASTER_PASSWORD || "rasool";
process.env.SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
process.env.SMTP_PORT = process.env.SMTP_PORT || "587";
process.env.SMTP_SECURE = process.env.SMTP_SECURE || "false";
process.env.SMTP_USER = process.env.SMTP_USER || "airnetcomputersbk@gmail.com";
process.env.SMTP_PASS = process.env.SMTP_PASS || "homrhankpeaerzmz";
process.env.SMTP_FROM_NAME = process.env.SMTP_FROM_NAME || "Airnet Computers";
process.env.ADMIN_EMAIL = process.env.ADMIN_EMAIL || "airnetcomputersbk@gmail.com";
process.env.RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "rasoolahmed246@gmail.com";

let appPromise = null;
async function getApp() {
  if (!appPromise) {
    appPromise = import("../artifacts/api-server/src/app.js")
      .catch(() => import("../artifacts/api-server/src/app"))
      .then((m) => m.default || m);
  }
  return appPromise;
}

export default async function handler(req, res) {
  try {
    const app = await getApp();
    return app(req, res);
  } catch (err) {
    console.error("[Vercel Serverless Error]:", err);
    res.status(500).json({ error: "Internal Server Error", message: err.message, stack: err.stack });
  }
}
