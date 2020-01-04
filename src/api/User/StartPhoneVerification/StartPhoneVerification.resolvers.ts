import { Resolvers } from "src/types/resolvers";
import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse
} from "../../../types/graph";
import Verification from "src/entities/Verification";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerificatio: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      try {
        const { phoneNumber } = args;
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });
        if (existingVerification) {
          existingVerification.remove();
        }
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: "PHONE"
        }).save();

        // to do send SMS
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
