import { sayHello } from "../../../types/graph";
const resolvers = {
  Query: {
    sayHello: (): sayHello => "hey hello how are you"
  }
};

export default resolvers;
