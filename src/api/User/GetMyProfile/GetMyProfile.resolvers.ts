import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: privateResolver(async (_, __, context) => {
      const user = context.req.user;
      return {
        ok: true,
        error: null,
        user
      };
    })
  }
};

export default resolvers;
