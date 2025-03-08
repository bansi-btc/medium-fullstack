import axios from "axios";
import { TsignInInput, TsignUpInput } from "@himanshugupta123/medium-common";
import { signInApi, signUpApi } from "../apiConstants";

type signUpResp = { success: boolean; message: string };
type signInResponse = { success: boolean; message: string; token?: string };

export const signUpUser = async (data: TsignUpInput): Promise<signUpResp> => {
  const resp = await axios.post(signUpApi, data, { withCredentials: true });

  return resp.data;
};

export const signInUser = async (
  data: TsignInInput
): Promise<signInResponse> => {
  const resp = await axios.post(signInApi, data, { withCredentials: true });
  return resp.data;
};
