import axios from "axios";
import { TsignUpInput } from "@himanshugupta123/medium-common";
import { signUpApi } from "../apiConstants";

type signUpResp = { success: boolean; message: string };

export const signUpUser = async (data: TsignUpInput): Promise<signUpResp> => {
  const resp = await axios.post(signUpApi, data);

  return resp.data;
};
