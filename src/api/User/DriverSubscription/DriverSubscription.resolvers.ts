import { withFilter } from "graphql-yoga";
import User from "src/entities/User";

const resolvers = {
  Subscription: {
    DriverSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("driverUpdate"),
        (payload, _, { context }) => {
          const user: User = context.currentUser;
          const {
            DriverSubscription: {
              lastLat: driverLastLat,
              lastLng: driverLastLng
            }
          } = payload;
          const { lastLat: userLastLat, lastLat: userLastLng } = user;
          return (
            driverLastLat >= userLastLat - 0.05 &&
            driverLastLat <= userLastLat + 0.05 &&
            driverLastLng >= userLastLng - 0.05 &&
            driverLastLng <= userLastLng + 0.05
          );
        }
      )
    }
  }
};
export default resolvers;
