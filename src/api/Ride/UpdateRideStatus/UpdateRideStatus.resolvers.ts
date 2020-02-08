import { Resolvers } from "src/types/resolvers";
import privateResolver from "src/utils/privateResolver";
import {
  UpdateRideStatusMutationArgs,
  UpdateRideStatusResponse
} from "../../../types/graph";
import User from "src/entities/User";
import Ride from "src/entities/Ride";

const resolvers: Resolvers = {
  Mutation: {
    UpdateRideStatus: privateResolver(
      async (
        _,
        args: UpdateRideStatusMutationArgs,
        { req }
      ): Promise<UpdateRideStatusResponse> => {
        const user: User = req.user;
        if (user.isDriving) {
          try {
            const ride = await Ride.findOne({
              id: args.rideId,
              status: "REQUESTING"
            });
            if (ride) {
              ride.status = args.status;
              ride.save();
            } else {
              return {
                ok: false,
                error: "Can't update ride"
              };
            }
          } catch (error) {
            return {
              ok: false,
              error: error.message
            };
          }
        }
      }
    )
  }
};

export default resolvers;
