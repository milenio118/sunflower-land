import { metamask } from "lib/blockchain/metamask";
import { CONFIG } from "lib/config";
import { ERRORS } from "lib/errors";

type Request = {
  sessionId: string;
  farmId: number;
  token: string;
};

const API_URL = CONFIG.API_URL;

async function signTransaction(request: Request) {
  const response = await window.fetch(`${API_URL}/sync`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${request.token}`,
    },
    body: JSON.stringify({
      sessionId: request.sessionId,
      farmId: request.farmId,
    }),
  });

  const data = await response.json();

  return data;
}

type Options = {
  farmId: number;
  sessionId: string;
  token: string;
};
export async function sync({ farmId, sessionId, token }: Options) {
  if (!API_URL) return;

  try {
    const transaction = await signTransaction({
      farmId,
      sessionId,
      token,
    });

    const session = await metamask.getSessionManager().sync(transaction);

    return session;
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error(ERRORS.REJECTED_TRANSACTION);
    }

    throw error;
  }
}
