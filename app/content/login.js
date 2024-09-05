const { cookies } = require("next/headers");
import { SignJWT } from "jose";

const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function session(formData = FormData) {
  const user = FormData;

  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ email, expires });

  cookies().set("session", session, { expires, httpOnly: true });
}
