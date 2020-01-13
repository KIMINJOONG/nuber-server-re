import { Resolvers } from "../../../types/resolvers";
import authResolver from "../../../utils/authResolver";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: authResolver(async (_, __, context) => {
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
